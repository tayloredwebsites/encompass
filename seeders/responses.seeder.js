var Seeder = require('mongoose-data-seed').Seeder;
var Response = require('../server/datasource/schemas').Response;

var data = [
  {
    "_id": "5b1aef7ae53645e768926123",
    "text": "ytytu",
    "original": null,
    "source": "submission",
    "createdBy": "5b245760ac75842be3189525",
    "submission": "53e1156db48b12793f00043d",
    "workspace": "53e1156db48b12793f000442",
    "comments": [],
    "selections": [],
    "isTrashed": false,
    "createDate": "2018-06-08T21:04:58.683Z"
  },
  {
    "_id" : "5bbe0224ecd6e597fd8eea13",
    "isTrashed" : true,
    "source": "submission",
    "text": "trashed response",
    "createdBy": "5b245760ac75842be3189525",
  }
];

var ResponsesSeeder = Seeder.extend({
  shouldRun: function () {
    return Response.count().exec().then(count => count === 0);
  },
  run: function () {
    return Response.create(data);
  }
});

module.exports = ResponsesSeeder;
