Encompass.ImportWorkComponent = Ember.Component.extend(Encompass.CurrentUserMixin, Encompass.ErrorHandlingMixin, Encompass.AddableProblemsMixin, {
  selectedProblem: null,
  selectedSection: null,
  selectedFiles: null,
  sections: null,
  uploadedFiles: null,
  isMatchingStudents: null,
  answers: null,
  uploadedAnswers: null,
  uploadedSubmissions: null,
  createdWorkspace: null,
  isReviewingSubmissions: null,
  doNotCreateWorkspace: false,
  doCreateWorkspace: Ember.computed.not('doNotCreateWorkspace'),
  alert: Ember.inject.service('sweet-alert'),
  isSelectingImportDetails: true,
  mode: 'private',
  requestedName: null,
  selectedFolderSet: null,
  isPrivate: Ember.computed.equal('mode', 'private'),
  findRecordErrors: [],
  createAnswerErrors: [],
  postErrors: [],

  readyToMatchStudents: Ember.computed('selectedProblem', 'selectedSection', 'uploadedFiles', 'isAddingMoreFiles', function() {
    const problem = this.get('selectedProblem');
    const section = this.get('selectedSection');
    const files = this.get('uploadedFiles');
    const isAdding = this.get('isAddingMoreFiles');

    const isReady = !Ember.isEmpty(problem) && !Ember.isEmpty(section) && !Ember.isEmpty(files) && !isAdding;
    return isReady;
  }),

  setIsCompDirty: function() {
    const problem = this.get('selectedProblem');
    const section = this.get('selectedSection');
    const files = this.get('uploadedFiles');
    // const uploading = this.get('isUploadingAnswer');

    const ret = !Ember.isEmpty(problem) || !Ember.isEmpty(section) || !Ember.isEmpty(files);

    if (ret) {
      this.set('isCompDirty', true);
      this.sendAction('doConfirmLeaving', true);
      return;
    }
    this.set('isCompDirty', false);
    this.sendAction('doConfirmLeaving', false);
  }.observes('selectedProblem', 'selectedSection', 'uploadedFiles', 'isUploadingAnswer'),

  onStepOne: Ember.computed('isMatchingStudents', 'isReviewingSubmissions', 'uploadedSubmissions', function() {
    const isMatchingStudents = this.get('isMatchingStudents');
    const isReviewingSubmissions = this.get('isReviewingSubmissions');
    const uploadedSubmissions = this.get('uploadedSubmissions');

    return !isMatchingStudents && !isReviewingSubmissions && !uploadedSubmissions;
  }),

  prevStep: Ember.computed('isMatchingStudents', 'isReviewingSubmissions', function() {
    let isMatchingStudents = this.get('isMatchingStudents');
    let isReviewingSubmissions = this.get('isReviewingSubmissions');

    if (isMatchingStudents) {
      return 'Import Detail Selection';
    }
    if (isReviewingSubmissions) {
      return 'Student Matching';
    }
    return null;
  }),

  init: function() {
    this._super(...arguments);
    this.set('sections', this.model.sections);
  },

  didReceiveAttrs: function() {
    this.setIsCompDirty();
    if (this.model.problems) {
      this.set('syncProblems', this.model.problems);
    }
    this.setAddProblemFunction('addProblemTypeahead');

  },

  resetImportDetails: function() {
    const opts = ['selectedProblem', 'selectedSection', 'uploadedFiles'];

    for (let opt of opts) {
      if (!Ember.isEmpty(this.get(opt))) {
        this.set(opt, null);
      }
    }
  },

  willDestroyElement: function() {
    this.resetImportDetails();
  },

  handleAdditionalFiles: function() {
    const additionalFiles = this.get('additionalFiles');
    if (Ember.isEmpty(additionalFiles) || !Array.isArray(additionalFiles)) {
      return;
    }

    let uploadedFiles = this.get('uploadedFiles');

    if (!uploadedFiles || !Array.isArray(uploadedFiles)) {
      uploadedFiles = [];
    }

    let combinedFiles = uploadedFiles.concat(additionalFiles);
    this.set('uploadedFiles', combinedFiles);
    this.set('additionalFiles', null);
    this.set('isAddingMoreFiles', false);
  }.observes('additionalFiles.[]'),

  actions: {
    toggleNewProblem: function() {
      if (this.get('isCreatingNewProblem') !== true) {
        this.set('isCreatingNewProblem', true);
      } else {
        this.set('isCreatingNewProblem', false);
      }
    },

    editImportDetail: function(detailName) {
      if (!detailName || typeof detailName !== 'string') {
        return;
      }
      if (detailName === 'additionalFiles') {
        this.set('isAddingMoreFiles', true);
        this.set('selectedFiles', null);
        return;
      }
      if (detailName === 'uploadedFiles') {
        console.log('clicked the x on uploaded files');
        let uploadedFiles = this.get('uploadedFiles');
        uploadedFiles.forEach((image) => {
          this.get('store').findRecord('image', image._id).then((image) => {
            image.destroyRecord();
          });
        });
        this.set('selectedFiles', null);
      }
        this.set(detailName, null);
    },

    backToPrevStep: function(prevStep) {
      if (!prevStep || typeof prevStep !== 'string') {
        return;
      }

      if (prevStep === 'Import Detail Selection') {
        this.set('isMatchingStudents', false);
        this.set('isSelectingImportDetails', true);
        return;
      }
      if (prevStep === 'Student Matching') {
        this.set('isReviewingSubmissions', false);
        this.set('isMatchingStudents', true);
        return;
      }
    },

    loadStudentMatching: function() {
      this.set('isSelectingImportDetails', false);
      this.set('isMatchingStudents', true);
      let images = this.get('uploadedFiles');
      let answers = [];

      // should this be using Promise.all/map since findRecord is async?
      images.forEach((image) => {
        let ans = {};
        let imageId = image._id;
        this.store.findRecord('image', imageId).then((image) => {
          ans.explanationImage = image;
          ans.problem = this.get('selectedProblem');
          ans.section = this.get('selectedSection');
          ans.isSubmitted = true;
          answers.push(ans);
          this.set('answers', answers);
        }).catch((err) => {
          this.handleErrors(err, 'findRecordErrors');
        });
      });
    },

    reviewSubmissions: function() {
      this.set('isMatchingStudents', false);
      this.set('isReviewingSubmissions', true);
    },

    uploadAnswers: function() {
      this.set('isUploadingAnswer', true);
      let answers = this.get('answers');
      const that = this;
      let subs;
      return Promise.all(answers.map((answer) => {
        // TODO: Determine how to handle groups
        answer.createdBy = answer.students[0];
        answer.answer = 'See image.';

        let ans = that.store.createRecord('answer', answer);
        ans.set('section', that.get('selectedSection'));
        ans.set('problem', that.get('selectedProblem'));
        return ans.save();
      }))
        .then((res) => {
        // if doCreateWorkspace, convert to submissions and create workspace
        // else just display details about # of answers uploaded
          const uploadedAnswers = res;

          if (that.get('doCreateWorkspace')) {
          this.set('isCompDirty', false);
          this.sendAction('doConfirmLeaving', false);
          subs = res.map((ans) => {
            //const teachers = {};
            const clazz = {};
            const publication = {
              publicationId: null,
              puzzle: {}
            };
            const creator = {};
            const teacher = {};


            const student = ans.get('createdBy');
            const section = ans.get('section');
            const problem = ans.get('problem');

            publication.puzzle.title = problem.get('title');
            publication.puzzle.problemId = problem.get('problemId');

            creator.studentId = student.get('userId');
            creator.username = student.get('username');

            clazz.sectionId = section.get('sectionId');
            clazz.name = section.get('name');

            const teachers = section.get('teachers');
            const primaryTeacher = teachers.get('firstObject');


            teacher.id = primaryTeacher.get('userId');
            let sub = {
              // longAnswer: ans.get('explanation'),
              answer: ans.id,
              clazz: clazz,
              creator: creator,
              teacher: teacher,
              publication: publication
            };
            return sub;
          });
          let folderSetName;
          let folderSet = this.get('selectedFolderSet');
          if (folderSet) {
            folderSetName = folderSet.get('name');
          } else {
            folderSetName = '';
          }

          let postData = {
            "subs": JSON.stringify(subs),
            "doCreateWorkspace": JSON.stringify(this.get('doCreateWorkspace')),
            "isPrivate": JSON.stringify(this.get('isPrivate')),
            "requestedName": JSON.stringify(this.get('requestedName')),
            "folderSet": JSON.stringify(folderSetName)
          };
           Ember.$.post({
            url: 'api/import',
            data: postData
          })
          .then((res) => {
            that.set('isReviewingSubmissions', false);
            // if workspace created
            if (res.workspaceId) {
              that.set('createdWorkspace', res);
              that.sendAction('toWorkspaces', res);
              this.get('alert').showToast('success', 'Workspace Created', 'bottom-end', 4000, false, null);
            }
          })
          .catch((err) => {
            this.handleErrors(err, 'postErrors');
          });
        } else { // don't create workspace
        that.set('isReviewingSubmissions', false);
        that.set('uploadedAnswers', uploadedAnswers);
        }


      }).catch((err) => {
        this.handleErrors(err, 'createAnswerErrors');
      });
    }


  }
});