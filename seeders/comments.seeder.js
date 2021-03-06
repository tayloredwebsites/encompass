var Seeder = require('mongoose-data-seed').Seeder;
var Comment = require('../server/datasource/schemas').Comment;

var data = [
  {
    _id: "53e12264b48b12793f000b84",
    ancestors: [],
    children: ["53e12507b48b12793f000b91"],
    createDate: "2014-08-05T18:28:52.692Z",
    createdBy: "53a43f7c729e9ef59ba7ebf2",
    isTrashed: false,
    label: "feedback",
    selection: "53e1223eb48b12793f000b81",
    submission: "53e1156db48b12793f00042d",
    text: " It helps to collaborate with someone!",
    useForResponse: true,
    workspace: "53e1156db48b12793f000442"
  } ,{
    _id: "53e12507b48b12793f000b91",
    ancestors: [],
    children: [],
    createDate: "2014-08-05T18:40:07.063Z",
    createdBy: "53a43f7c729e9ef59ba7ebf2",
    isTrashed: false,
    label: "feedback",
    selection: "53e12503b48b12793f000b90",
    submission: "53e1156db48b12793f00042d",
    text: "  It helps to collaborate with someone!",
    useForResponse: true,
    workspace: "53e1156db48b12793f000442"
  }, {
    _id: "53e37a4ab48b12793f00104c",
    ancestors: [],
    children: [],
    createDate: "2014-08-07T13:08:26.396Z",
    createdBy: "529518daba1cd3d8c4013344",
    isTrashed: false,
    label: "feedback",
    selection: "53e379dfb48b12793f00104a",
    submission: "53e36522729e9ef59ba7f4da",
    text: "I spoke with Michael about the balance between the specific contexts we are working on and the teaching issues and that he could continue to help articulate the teaching issues even as there is a focus on implementing pows and the software",
    useForResponse: true,
    workspace: "53e36522b48b12793f000d3b"
  },
  {
    "_id" : "5bbb9d86c2aa0a1696840ceb",
    "label" : "feedback",
    "text" : "I notice that your explanation is vague.",
    "createdBy" : "5b9149552ecaf7c30dd4748e",
    "lastModifiedBy" : null,
    "selection" : "5bbb9d57c2aa0a1696840ce9",
    "origin" : null,
    "parent" : null,
    "submission" : "5bb814d19885323f6d894973",
    "workspace" : "5bb814d19885323f6d894974",
    "children" : [],
    "ancestors" : [],
    "useForResponse" : true,
    "lastModifiedDate" : null,
    "isTrashed" : false,
    "createDate" : "2018-10-08T18:10:14.579Z"
},
{
  "_id" : "5bbbba86a6a7ee1a9a5ebc75",
  "label" : "wonder",
  "text" : "I wonder what this means...",
  "createdBy" : "5b7321ee59a672806ec903d5",
  "lastModifiedBy" : null,
  "selection" : "5bbbba75a6a7ee1a9a5ebc74",
  "origin" : null,
  "parent" : null,
  "submission" : "53e1156db48b12793f000414",
  "workspace" : "53e1156db48b12793f000442",
  "children" : [],
  "ancestors" : [],
  "useForResponse" : false,
  "lastModifiedDate" : null,
  "isTrashed" : false,
  "createDate" : "2018-10-08T20:13:58.108Z"
},
{
  "_id" : "5bbdfa74ecd6e597fd8d3cdf",
  "isTrashed" : true,
  "createdBy": "5b7321ee59a672806ec903d5",
  "selection" : "5bbbba75a6a7ee1a9a5ebc74",
  "submission" : "53e1156db48b12793f000414",
  "workspace" : "53e1156db48b12793f000442",
  "text": "trashed comment"
}
];

var CommentsSeeder = Seeder.extend({
  shouldRun: function () {
    return Comment.count().exec().then(count => count === 0);
  },
  run: function () {
    return Comment.create(data);
  }
});

module.exports = CommentsSeeder;
