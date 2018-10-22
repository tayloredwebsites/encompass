Encompass.Problem = DS.Model.extend(Encompass.Auditable, {
  problemId: Ember.computed.alias('id'),
  title: DS.attr('string'),
  puzzleId: DS.attr('number'),
  text: DS.attr('string'),
  imageUrl: DS.attr('string'),
  sourceUrl: DS.attr('string'),
  image: DS.belongsTo('image', { inverse: null} ),
  origin: DS.belongsTo('problem', { inverse: null }),
  modifiedBy: DS.belongsTo('user', { inverse: null }),
  organization: DS.belongsTo('organization', { inverse: null }),
  additionalInfo: DS.attr('string'),
  privacySetting: DS.attr('string'),
  categories: DS.hasMany('category', { inverse: null }),
  keywords: DS.attr(),
  copyrightNotice: DS.attr('string'),
  sharingAuth: DS.attr('string'),
  error: DS.attr('string'),
  isUsed: DS.attr('boolean'),
  status: DS.attr('string')
});
