const mongoose = require('mongoose');
const util = require('util');
const _ = require('underscore');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
  * @public
  * @class Log
  * @description A single user history log of an event.
  *              Used as a subdocument of the user model
*/
var Log = new Schema({
  creator: { type: String, default: "system" },
  time: { type: Date, default: Date.now() },
  event: { type: String, required: true },
  duration: { type: Number, default: 0 },
  isError: { type: Boolean, default: false }
},
  {
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  });

Log.virtual('message').get(function () {
  var success = (this.isError) ? "unsuccessfully" : "successfully";
  var msg = "User `%s` performed %s on %s %s. It took %s ms";

  return util.format(msg, this.creator, this.event, this.time, success, this.duration);
});

/**
  * @public
  * @class User
  * @class User
  * @description A user is created by signup using passport and authorized by admin
  * @todo We need to decide how to handle different user types/roles
*/
var UserSchema = new Schema({
  //== Shared properties (Because Monggose doesn't support schema inheritance)
  createdBy: { type: ObjectId, ref: 'User' },
  createDate: { type: Date, 'default': Date.now() },
  isTrashed: { type: Boolean, 'default': false },
  lastModifiedBy: { type: ObjectId, ref: 'User' },
  lastModifiedDate: { type: Date, 'default': Date.now() },
  //====
  /* + The username is the mfapps username */
  username: { type: String, unique: true, required: true },
  accountType: { type: String, enum: ['A', 'P', 'T', 'S'], required: true },
  isAdmin: Boolean, // depricated - needed to convert to new accountType field
  /* + Are they otherwise authorized for EnCoMPASS */
  isAuthorized: { type: Boolean, default: false },
  authorizedBy: { type: ObjectId, ref: 'User' },
  // isStudent: Boolean,

  // 'student' or 'teacher' - only used by teacher accounts to determine if they are in teacher mode or student mode
  actingRole: { type: String, enum: ['teacher', 'student'] },
  name: { type: String },
  email: { type: String },
  googleId: { type: String },
  // key: { type: String },
  password: { type: String },
  // forcePwdChg: { type: Boolean },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  confirmEmailToken: { type: String },
  confirmEmailExpires: { type: Date },
  isEmailConfirmed: { type: Boolean, default: false },
  organization: { type: ObjectId, ref: 'Organization' },
  organizationRequest: { type: String },
  location: { type: String },
  requestReason: { type: String },
  // We only use google for external auth, we can use these fields if we use more OAuths
  // authSource: String,
  // authUserId: String,
  sessionId: String,
  sections: [{ sectionId: { type: ObjectId, ref: 'Section' }, role: String, _id: false}],
  answers: [{ type: ObjectId, ref: 'Answer' }],
  // Migrating from assignments to answers, keeping this in for tests - change apiTest for assinment to answer
  assignments: [{type: ObjectId, ref: 'Assignment'}],
  seenTour: { type: Date },
  lastSeen: { type: Date },
  history: [Log] // currently not working
  //sessions: [{key: String, starts: Number, ends: Number}]
},
{
  versionKey: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

UserSchema.virtual('lastLogin')
  .get(function () {
    var logins = _.where(this.history, { event: 'Login' });
    var lastLogin = logins.slice(-1)[0];

    return (lastLogin) ? lastLogin.time : null;
  })
  .set(function (time) {
    this.history.push({
      event: 'Login',
      time: time,
    });
  });


UserSchema.virtual('lastImported')
  .get(function () {
    var imports = _.where(this.history, { event: 'PoW Import' });
    var lastImport = imports.slice(-1)[0];

    return (lastImport) ? lastImport.time : null;
  })
  .set(function (time) {
    this.history.push({
      event: 'PoW Import',
      time: time,
    });
  });

module.exports.User = mongoose.model('User', UserSchema);
