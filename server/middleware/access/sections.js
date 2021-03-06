const utils = require('./utils');
module.exports.get = {};

const accessibleSectionsQuery = function(user, ids) {
  try {
    if (!user) {
      return [];
    }
    const accountType = user.accountType;
    const actingRole = user.actingRole;

  let filter = {
    isTrashed: false
  };

  if (ids) {
    filter._id = {$in : ids};
  }
  // Students can get sections they are a student of
  if (actingRole === 'student' || accountType === 'S') {
    filter.students = user._id;

    return filter;
  }

  // Admins with acting role 'teacher' can get everything
  if (accountType === 'A') {
    return filter;
  }
  // PdAdmins with acting role 'teacher' can get all sections tied to their org
  if (accountType === 'P') {
    const userOrg = user.organization;
    if (userOrg) {
      filter.organization = userOrg;
    }

    return filter;
  }
  // Teachers with acting role 'teacher' can get all sections where they are a teacher
  if (accountType === 'T') {

    filter.teachers = user._id;
    return filter;
  }
  }catch(err) {
    console.log('err', err);
  }

};

const canGetSection = async function(user, sectionId) {
  if (!user) {
    return;
  }

  const { accountType } = user;

  // admins currently can get all sections
  if (accountType === 'A') {
    return true;
  }

  // use accessibleSections criteria to determine access for teachers/pdAdmins

  let criteria = await accessibleSectionsQuery(user, sectionId);
  let accessibleIds = await utils.getModelIds('Section', criteria);

  // map objectIds to strings to check for existence
  accessibleIds = accessibleIds.map(id => id.toString());

    if (accessibleIds.includes(sectionId)) {
      return true;
    }
    return false;
};

module.exports.get.sections = accessibleSectionsQuery;
module.exports.get.section = canGetSection;