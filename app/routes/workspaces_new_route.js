Encompass.WorkspacesNewRoute = Encompass.AuthenticatedRoute.extend({
  beforeModel: function() {
    this._super.apply(this, arguments);

    const user = this.modelFor('application');
    const isStudent = user.get('isStudent');

    if (isStudent) {
      this.transitionTo('/');
    }
  },
  model: function() {
    return Ember.RSVP.hash({
      pdSets: this.get('store').findAll('PdSet'),
      folderSets: this.get('store').findAll('folderSet'),
      sections: this.get('store').findAll('section'),
      assignments: this.get('store').findAll('assignment'),
      users: this.get('store').findAll('user'),
      problems: this.get('store').findAll('problem')
    });
  },

  actions: {
    // Created workspaceId and the firstSubmission are passed from component to redirect
    toWorkspaces: function (workspaceId, submissionId) {
      window.location.href = `#/workspaces/${workspaceId}/submissions/${submissionId}`;
    },

    toWorkspace: function(id) {
      this.transitionTo('workspace/work', id);
    }
  }
});
