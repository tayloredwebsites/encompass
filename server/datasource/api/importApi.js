/**
  * # Import API
  * @description This is the API for import based requests
*/

//REQUIRE MODULES
const _ = require('underscore');
const logger = require('log4js').getLogger('server');

//REQUIRE FILES
const models = require('../schemas');
const auth = require('./auth');
const userAuth = require('../../middleware/userAuth');
const permissions  = require('../../../common/permissions');
const utils    = require('../../middleware/requestHandler');
const workspaceApi = require('./workspaceApi');

module.exports.get = {};
module.exports.post = {};
module.exports.put = {};

const formatAnswers = (answers) => {
  if (!Array.isArray(answers)) {
    return;
  }

};

/**
  * @public
  * @method postImport
  * @description __URL__: /api/import
  * @throws {NotAuthorizedError} User has inadequate permissions
  * @throws {InternalError} Data saving failed
  * @throws {RestError} Something? went wrong
  */

/* jshint ignore:start */
const postImport = async function(req, res, next) {
  let submissionSet;
  const user = userAuth.requireUser(req);
  // Add permission checks here
  const subData = JSON.parse(req.body.subs);
  const doCreateWorkspace = JSON.parse(req.body.doCreateWorkspace);
  const isPrivate = JSON.parse(req.body.isPrivate);
  let workspaceMode;
  if (doCreateWorkspace) {
    workspaceMode = isPrivate ? 'private' : 'public';
  }
  console.log('dcw', doCreateWorkspace);
  console.log('workspaceMode', workspaceMode);
 let submissions;

  // subData is array of objects containing submission data
  // longAnswer property is the objectId of the image
  // need to get the image data and set it as the longAnswer
  for (let sub of subData) {
    let imageId = sub.longAnswer;
    let imageAlt = `${sub.creator.username}'s submission`;

    try {
      let image = await models.Image.findById(imageId);
      if (image.mimetype === 'application/pdf') {
        sub.longAnswer = image.data;
        sub.isPdf = true;
      } else {
        sub.longAnswer = `<img src="${image.data}" alt="${imageAlt}">`;
        sub.isPdf = false;
      }
    }catch(err) {
      console.log(err);
    }
  }

  try {
    submissions = await Promise.all(subData.map((obj) => {
      let sub = new models.Submission(obj);
      sub.createdBy = user;
      sub.createDate = Date.now();
      return sub.save();
}));
const submissionIds = submissions.map((sub) => {
  return sub._id;
});

// if user does not want to automatically create workspace
if (!doCreateWorkspace) {
  const data = {'submissionIds': submissionIds};
  return utils.sendResponse(res, data);
}

// else create workspace from newly created submissions

// submissionSet is used to determine if a workspace already exists for
// a given set of submissions
submissionSet = await buildSubmissionSet(submissions, user);

let name = workspaceApi.nameWorkspace(submissionSet, user, false);
let workspace = new models.Workspace({
  mode: 'private',
  name: name,
  owner: user,
  submissionSet: submissionSet,
  submissions: submissionIds
});
let ws = await workspace.save();
const data = {'workspaceId': ws._id};
return utils.sendResponse(res, data);

}catch(err) {
    logger.error(err);
    return utils.sendError.InternalError(err, res);
  }
};

const buildSubmissionSet = async function(submissions, user) {
  let submissionSet;
  if (!Array.isArray(submissions)) {
    return;
  }
  const submissionIds = submissions.map((sub) => {
    return sub._id;
  });

  var matchBy = {
    "teacher.id": submissions[0].teacher.id,
    "_id": {$in: submissionIds},
    $or: [
      {"workspaces": null},  //and that aren't already in a workspace | @todo: might be in another user's workspace you know...
      {"workspaces": {$size: 0}},
      {"workspaces": {$exists: true}},
    ],
    "isTrashed": {$in: [null, false]} //submissions that are not deleted
  };
  var sortBy = { "createDate": 1 };
  var groupBy = {
    _id: {
      group: "$clazz.sectionId",
      //pub: "$publication.publicationId",
      puzzle: "$publication.puzzle.problemId",
      name:  "$clazz.name",
      title:  "$publication.puzzle.title"
    },
    pdSet: {$first: "$pdSet"},
    firstSubmissionDate: {$first: "$createDate"},
    lastSubmissionDate:  {$last:  "$createDate"},
    submissions: { $addToSet: "$_id" },
  };
  var include = {
    submissionSet: {
      submissions: "$submissions",
      description: {
        pdSource: "$pdSet",
        firstSubmissionDate: "$firstSubmissionDate",
        lastSubmissionDate: "$lastSubmissionDate",
        puzzle: {
          title: "$_id.title"
        },
        group: {
          name: "$_id.name"
        },
        // publication: {
        //   pubId: "$_id.pub"
        // }
      },
      criteria: {
        pdSet: "$pdSet",
        group: {
          groupId: "$_id.group"
        },
        puzzle: {
          puzzleId: "$_id.puzzle"
        }
      }
    }
  };
  try {
    submissionSet = await models.Submission.aggregate([
      { $match: matchBy},
      { $sort: sortBy },
      { $group: groupBy },
      { $project: include }]);
  }catch(err) {
    console.log(err);
  }
  return submissionSet[0].submissionSet;
};



module.exports.post.import = postImport;
/* jshint ignore:end */