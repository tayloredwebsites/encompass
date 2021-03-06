var Seeder = require('mongoose-data-seed').Seeder;
var User = require('../server/datasource/schemas').User;

var data = [{
    "_id": "529518daba1cd3d8c4013344",
    "accountType": 'A',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "5b8d3ded-cc7f-4aa7-9570-06077d799e81",
    "name": "steve",
    "username": "steve",
    "organization": "5b4e4d5f808c7eebc9f9e82c",
    "createdBy": "529518daba1cd3d8c4013344",
    "sections": [],
    "assignments": [],
    "createDate": "2018-08-12T18:20:51.382Z",
  }, {
    "_id": "529646eae4bad7087700014d",
    "accountType": 'A',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "42043bb2-ac33-49bf-abf1-e69d3c81437b",
    "name": "",
    "username": "jsilverman",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "529646eae4bad7087700014d",
  }, {
    "_id": "52964714e4bad7087700014e",
    "accountType": 'A',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "12430982-a2c3-420c-b5d8-78a1f92fd8f6",
    "name": "",
    "username": "maxray",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "52964714e4bad7087700014e",
  }, {
    "_id": "52a8823d729e9ef59ba7eb4a",
    "createdBy": "52a8823d729e9ef59ba7eb4a",
    "accountType": 'A',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "5574b5f9-71e1-4202-9c7c-90e252cd6306",
    "name": null,
    "username": "matraa57",
    "createDate": "2018-08-12T18:20:51.382Z",
  }, {
    "_id": "52a88ae2729e9ef59ba7eb4b",
    "accountType": 'T',
    "organization": "5b4a64a028e4b75919c28512",
    "isAuthorized": false,
    "isTrashed": false,
    "key": "b2134b34-6367-4f58-a385-717c297e70ba",
    "name": null,
    "seenTour": null,
    "username": "wes",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "52a88ae2729e9ef59ba7eb4b",
  }, {
    "_id": "52a88def729e9ef59ba7eb4c",
    "accountType": 'T',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "149b31e3-b977-45ea-8534-68aead8b4444",
    "name": null,
    "seenTour": null,
    "username": "candice.roberts",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "52a88def729e9ef59ba7eb4c"
  }, {
    "_id": "52b05fae729e9ef59ba7eb4d",
    "accountType": 'A',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "a07e247a-618a-4ac7-a6df-e7ed929aa963",
    "name": "Valerie Klein",
    "seenTour": null,
    "username": "vklein",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "52b05fae729e9ef59ba7eb4d"
  }, {
    "_id": "5370dc9c8f3e3d1f21000022",
    "accountType": 'T',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "ffc2237f-ff27-43b1-8c48-fcd9fa0db8ab",
    "name": "Daniel Lewis",
    "seenTour": null,
    "username": "dsl44",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "5370dc9c8f3e3d1f21000022"
  }, {
    "_id": "53a355a932f2863240000026",
    "accountType": 'T',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "4aaf0c43-ba27-4201-9e0a-28990984f62a",
    "name": "Harold",
    "seenTour": null,
    "username": "hle22",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "53a355a932f2863240000026"
  }, {
    "_id": "53a43f7c729e9ef59ba7ebf2",
    "accountType": 'T',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "cba4a0d2-a06e-4ac5-92fd-67fcb772da34",
    "name": null,
    "seenTour": null,
    "username": "absvalteaching",
    "assignments": [],
    "sections": [],
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "53a43f7c729e9ef59ba7ebf2"
  }, {
    "_id": "53d274a032f2863240001a71",
    "name": "salejandre",
    "username": "salejandre",
    "accountType": 'T',
    "isAuthorized": true,
    "seenTour": null,
    "lastSeen": null,
    "isTrashed": false,
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "53d274a032f2863240001a71"
  }, {
    "_id": "53d9a577729e9ef59ba7f118",
    "accountType": 'T',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "3933f032-fa60-469a-b4ec-098083a51921",
    "name": null,
    "seenTour": null,
    "username": "mrs. wren",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "53d9a577729e9ef59ba7f118"
  }, {
    "_id": "5b1e758ba5d2157ef4c90b2d",
    "accountType": 'A',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "test-admin-key",
    "name": "superuser",
    "username": "superuser",
    "organization": "5b4e4d5f808c7eebc9f9e82c",
    "assignments": [],
    "sections": [],
    "createDate": "2018-08-14T18:20:51.382Z",
    "createdBy": "5b1e758ba5d2157ef4c90b2d",
    "email": "superuser@fakeemail.com"
  }, {
    "_id": "5b1e7bf9a5d2157ef4c911a6",
    "accountType": 'T',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "test-teacher-key",
    "name": "Dr. Rex",
    "username": "drex",
    "assignments": [],
    "sections": [],
    "organization": "5b4a64a028e4b75919c28512",
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "5b1e7bf9a5d2157ef4c911a6"
  }, {
    "_id": "5b1e7ca6a5d2157ef4c91210",
    "accountType": 'T',
    "isAuthorized": false,
    "isTrashed": false,
    "key": "test-unauth-key",
    "name": "Nope",
    "username": "nope",
    "organization": "5b4e4d5f808c7eebc9f9e82c",
    "assignments": [],
    "sections": [],
    "createDate": "2018-08-14T18:20:51.382Z",
    "createdBy": "5b1e7ca6a5d2157ef4c91210"
  }, {
    "_id": "5b245760ac75842be3189525",
    "username": "rick",
    "email": "rick@gmail.com",
    "organization": "5b4a64a028e4b75919c28512",
    "password": "$2a$08$/c9pHIH086E5qc.Mxh04geJ62xygISgF9C7eQnMzsHoukmpZ/QcX.",
    "isAuthorized": true,
    "accountType": 'A',
    "assignments": [],
    "sections": [],
    "isTrashed": false,
    "isEmailConfirmed": true,
    "actingRole": "teacher",
    "createdBy": "5b245760ac75842be3189525",
  }, {
    "_id": "5b245841ac75842be3189526",
    "username": "morty",
    "accountType": 'T',
    "organization": '5b4a64a028e4b75919c28512',
    "password": "$2a$08$Puko.4Ukg3fUVSfQsyhlauvEJ84/ymUidiL7xablVfic59zzC4gFi",
    "isAuthorized": true,
    "assignments": [],
    "sections": [],
    "isTrashed": false,
    "isEmailConfirmed": true,
    "createDate": "2018-08-17T10:20:51.382Z",
    "actingRole": "teacher",
    "createdBy": "5b245841ac75842be3189526"
  }, {
    "_id": "5b3688218610e3bfecca403c",
    "accountType": 'S',
    "username": "testUser",
    "isAuthorized": true,
    "organization": "5b4a64a028e4b75919c28512",
    "assignments": [],
    "sections": [],
    "isTrashed": false,
    "createdBy": "5b245841ac75842be3189526",
    "createDate": "2018-08-12T18:20:51.382Z",
  }, {
    "_id": "5b368afdca1375a94fabde39",
    "accountType": 'S',
    "isAuthorized": true,
    "isTrashed": false,
    "key": "5b8d3ded-cc7f-4aa7-9570-06077d799e81",
    "organization": "5b4a64a028e4b75919c28512",
    "name": "student1",
    "username": "student1",
    "createdBy": "5b245841ac75842be3189526",
    "sections": [],
    "assignments": [],
    "createDate": "2018-08-16T10:20:51.382Z",
  }, {
    "_id": "5b4e5180a2eed65e2434d475",
    "accountType": 'S',
    "username": "testUser2",
    "organization": "5b4a64a028e4b75919c28512",
    "isAuthorized": true,
    "assignments": [],
    "answers": [],
    "sections": [],
    "isTrashed": false,
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "5b245760ac75842be3189525"
  }, {
    "_id": "5b72273c5b50ea3fe3d01a0b",
    "username": "alice42",
    "accountType": 'T',
    "actingRole": 'teacher',
    "name": 'Alice Carrol',
    "isEmailConfirmed": true,
    "organization": "5b4a64a028e4b75919c28512",
    "resetPasswordToken": "64a9360d9bf51cfc85662fd845c964680d39768e",
    "resetPasswordExpires": "2088-08-14T21:13:47.107Z",
    "password": "$2a$08$Puko.4Ukg3fUVSfQsyhlauvFJ84/ymtidiL8qablVfic59zzC4gFi",
    "isAuthorized": true,
    "isTrashed": false,
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "5b72273c5b50ea3fe3d01a0b"
  },
  {
    "_id": "5b72278b5b50ea3fe3d01a34",
    "username": "eeyore",
    "accountType": 'T',
    "actingRole": 'teacher',
    "name": 'Ian M.',
    "isEmailConfirmed": true,
    "resetPasswordToken": "64f9r60x9b2513f785q62fd845c964680d39768e",
    "resetPasswordExpires": "2018-08-12T21:13:47.107Z",
    "password": "$2a$08$Puko.4Ukg3yUVSfQsyhlauvFJ/4/ymtidiL8qab.Vfic59zzC4gFi",
    "organization": "5b4a64a028e4b75919c28512",
    "isAuthorized": true,
    "isTrashed": false,
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "5b72278b5b50ea3fe3d01a34"
  },
  {
    "_id": "5b72e05ba459749f7d9c1709",
    "username": "perryz",
    "accountType": 'T',
    "actingRole": 'teacher',
    "name": 'Perry Zeller',
    "email": 'encmath2@gmail.com',
    "organization": "5b4a64a028e4b75919c28512",
    "isEmailConfirmed": false,
    "confirmEmailToken": "64y9r60x9b2513f785q62fdt45c924630339968e",
    "confirmEmailExpires": "2088-08-12T21:13:47.107Z",
    "password": "$2a$12$q1.0QW/dcY.OzwqfkzKLf.D.4i02m4Ypa0fHTqcqivJD.bxLn6NLa",
    "isAuthorized": true,
    "isTrashed": false,
    "createDate": "2018-08-12T18:20:51.382Z",
    "createdBy": "5b72e05ba459749f7d9c1709"
  },
  {
    "_id": "5b72e6465b50ea3fe3d1623c",
    "username": "perryu",
    "accountType": 'T',
    "actingRole": 'teacher',
    "name": 'Perry Uller',
    "email": 'encmath2@gmail.com',
    "organization": "5b4a64a028e4b75919c28512",
    "isEmailConfirmed": false,
    "confirmEmailToken": "62y9f60x9b2513f785f62fdt41f924630339968f",
    "confirmEmailExpires": "2018-08-12T21:13:47.107Z",
    "password": "$2a112$11.0QW/dcY.O/wqfkzKLf.D.4i02m4Ypa0fHTqcqivJD.bxLn6NLa",
    "createDate": "2018-08-14T18:20:51.382Z",
    "isAuthorized": true,
    "isTrashed": false,
    "createdBy": "5b72e6465b50ea3fe3d1623c"
  },
  {
    "_id": "5b7321ee59a672806ec903d5",
    "name": "PD Admin",
    "email": "pdadmin@test.com",
    "organization": "5b4a64a028e4b75919c28512",
    "location": "Philadelphia, PA",
    "username": "pdadmin",
    "password": "$2a$12$nQafJwfxx19P2vyBhDLXUeDFNdZU81t1eosZEvs.plyCP1HNSZFtW",
    "isAuthorized": true,
    "accountType": "P",
    "isEmailConfirmed": true,
    "lastModifiedDate": "2018-08-14T18:20:51.382Z",
    "isTrashed": false,
    "createDate": "2018-08-14T18:20:51.382Z",
    "lastSeen": "2018-08-16T20:19:26.457Z",
    "createdBy": "5b245760ac75842be3189525"
  },
  {
    "_id": "52964653e4bad7087700014b",
    "name": "testfix",
    "email": "testfix@test.com",
    "organization": "5b4a64a028e4b75919c28512",
    "location": "Philadelphia, PA",
    "username": "testfix",
    "password": "$2a$12$nQafJwfxx19P2vyBhDLXUeDFNdZU81t1eosZEvs.plyCP1HNSZFtW",
    "isAuthorized": true,
    "accountType": "T",
    "isEmailConfirmed": true,
    "lastModifiedDate": "2018-08-14T18:20:51.382Z",
    "isTrashed": false,
    "createDate": "2018-08-14T18:20:51.382Z",
    "lastSeen": "2018-08-16T20:19:26.457Z",
    "actingRole": "teacher",
    "createdBy": "5b7321ee59a672806ec903d5"
  },
  {
    "_id" : "5b913ebe3add43b868ae9807",
    "organization" : "5b4a64a028e4b75919c28512",
    "username" : "jamie4",
    "password" : "$2a$12$9yHQw56mEBj/3RdMj/1ohuF1pjxk9s.Jq6fBGAYqBs/wPwVyAvYR2",
    "accountType" : "S",
    "createdBy" : "5b245841ac75842be3189526",
    "history" : [],
    "assignments" : ["5b9146a83add43b868ae9809"],
    "answers" : [],
    "sections" : [
        {
            "sectionId" : "5b913e723add43b868ae9804",
            "role" : "student"
        }
    ],
    "isEmailConfirmed" : false,
    "isAuthorized" : true,
    "lastModifiedDate" : "2018-09-05T20:57:31.730Z",
    "isTrashed" : false,
    "createDate" : "2018-09-05T20:57:31.730Z"
},
{
  "_id" : "5b913eaf3add43b868ae9806",
  "organization" : "5b4a64a028e4b75919c28512",
  "username" : "sam3",
  "password" : "$2a$12$BncFqBAu92VeyuKX7WUQjuDREWncoR6BgG0.3aZOulruEs5iwb7qS",
  "accountType" : "S",
  "createdBy" : "5b245841ac75842be3189526",
  "history" : [],
  "assignments" : ["5b9146a83add43b868ae9809"],
  "answers" : [],
  "sections" : [
      {
          "sectionId" : "5b913e723add43b868ae9804",
          "role" : "student"
      }
  ],
  "isEmailConfirmed" : false,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-05T20:57:31.730Z",
  "isTrashed" : false,
  "createDate" : "2018-09-05T20:57:31.730Z"
},
{
  "_id" : "5b913ea33add43b868ae9805",
  "organization" : "5b4a64a028e4b75919c28512",
  "username" : "alex8",
  "password" : "$2a$12$VJaCSw8ISla5ntkNL07qjuF.rU/ZV3xgmbnAyEbyUEN.acBOnavym",
  "accountType" : "S",
  "createdBy" : "5b245841ac75842be3189526",
  "history" : [],
  "assignments" : ["5b9146a83add43b868ae9809"],
  "answers" : [],
  "sections" : [
      {
          "sectionId" : "5b913e723add43b868ae9804",
          "role" : "student"
      }
  ],
  "isEmailConfirmed" : false,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-05T20:57:31.730Z",
  "isTrashed" : false,
  "createDate" : "2018-09-05T20:57:31.730Z"
},
{
    "_id" : "5b9149f52ecaf7c30dd47491",
    "organization" : "5b4e4d5f808c7eebc9f9e82c",
    "username" : "morganf",
    "password" : "$2a$12$bJ6SE4Y7KTAt1VtatrwSku2Y.wqto0JQKUjJvkvwGHkoelr2tOKX.",
    "accountType" : "S",
    "createdBy" : "5b9149552ecaf7c30dd4748e",
    "history" : [],
    "assignments" : ["5b91743a3da5efca74705773"],
    "answers" : [],
    "sections" : [
        {
            "sectionId" : "5b9149a32ecaf7c30dd4748f",
            "role" : "student"
        }
    ],
    "isEmailConfirmed" : false,
    "isAuthorized" : true,
    "lastModifiedDate" : "2018-09-06T15:30:21.278Z",
    "isTrashed" : false,
    "createDate" : "2018-09-06T15:30:21.278Z"
},
{
  "_id" : "5b9149c22ecaf7c30dd47490",
  "organization" : "5b4e4d5f808c7eebc9f9e82c",
  "username" : "ashleyc",
  "password" : "$2a$12$X7PKqTfa/ydePAKPNGGd4ObP9W6NSE34Cdwf3dYpT2BJh3oA2mSda",
  "accountType" : "S",
  "createdBy" : "5b9149552ecaf7c30dd4748e",
  "history" : [],
  "assignments" : ["5b91743a3da5efca74705773"],
  "answers" : [],
  "sections" : [
      {
          "sectionId" : "5b9149a32ecaf7c30dd4748f",
          "role" : "student"
      }
  ],
  "isEmailConfirmed" : false,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-06T15:30:21.278Z",
  "isTrashed" : false,
  "createDate" : "2018-09-06T15:30:21.278Z"
},
{
  "_id" : "5b914a102ecaf7c30dd47492",
  "organization" : "5b4e4d5f808c7eebc9f9e82c",
  "username" : "tracyc",
  "password" : "$2a$12$svhAmCvhB2Q0iSJlwMyH6.2q4nJKLBvnGAVfXRVqkXDJKotpWd4Wq",
  "accountType" : "S",
  "createdBy" : "5b9149552ecaf7c30dd4748e",
  "history" : [],
  "assignments" : ["5b91743a3da5efca74705773"],
  "answers" : [],
  "sections" : [
      {
          "sectionId" : "5b9149a32ecaf7c30dd4748f",
          "role" : "student"
      }
  ],
  "isEmailConfirmed" : false,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-06T15:30:21.278Z",
  "isTrashed" : false,
  "createDate" : "2018-09-06T15:30:21.278Z"
},
{
  "_id" : "5b914a802ecaf7c30dd47493",
  "confirmEmailExpires" : "2018-09-07T15:40:48.142Z",
  "confirmEmailToken" : "329ff40a5d27344c6681d2d93bc1f628d71501fe",
  "name" : "Taylor Taylorson",
  "email" : "taylor@fakeemail.com",
  "organization" : "5b4e4d5f808c7eebc9f9e82c",
  "location" : "Conshohocken, PA",
  "username" : "teachertaylor",
  "password" : "$2a$12$p.4iz7z06yQdV4kyUAmq6.jG2Z0CHCCoyQppY21x8j5WhmcyDLxPG",
  "accountType" : "T",
  "createdBy" : "5b245760ac75842be3189525",
  "authorizedBy" : "5b245760ac75842be3189525",
  "actingRole" : "teacher",
  "history" : [],
  "assignments" : [],
  "answers" : [],
  "sections" : [
      {
          "role" : "teacher",
          "sectionId" : "5b9149a32ecaf7c30dd4748f"
      }
  ],
  "isEmailConfirmed" : false,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-06T15:30:21.278Z",
  "isTrashed" : false,
  "createDate" : "2018-09-06T15:30:21.278Z",
  "lastModifiedBy" : null,
  "lastSeen" : null,
  "organizationRequest" : null,
  "requestReason" : null,
  "seenTour" : null
},
{
  "_id" : "5b9149552ecaf7c30dd4748e",
  "name" : "Summer Smith",
  "email" : "ssmith@fakeemail.com",
  "organization" : "5b4e4d5f808c7eebc9f9e82c",
  "location" : "Conshohocken, PA",
  "username" : "ssmith",
  "password" : "$2a$12$rAJwBMeVR5RXPhKGGgMRdOM/OaOREMrsIPE2HZcBI0PCW2cME4IFi",
  "requestReason" : "Professional Development",
  "accountType" : "T",
  "actingRole" : "teacher",
  "history" : [],
  "assignments" : [],
  "answers" : [],
  "sections" : [
      {
          "role" : "teacher",
          "sectionId" : "5b9149a32ecaf7c30dd4748f"
      }
  ],
  "isEmailConfirmed" : true,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-06T15:36:31.451Z",
  "isTrashed" : false,
  "createDate" : "2018-09-06T15:30:21.278Z",
  "lastSeen" : "2018-09-06T15:41:14.918Z",
  "authorizedBy" : null,
  "createdBy" : "5b9149552ecaf7c30dd4748e",
  "lastModifiedBy" : "5b245760ac75842be3189525",
  "seenTour" : null,
},
{
  "_id" : "5b99146e25b620610ceead75",
  "confirmEmailExpires" : "2018-09-13T13:28:14.336Z",
  "confirmEmailToken" : "877b58517e38015753f98d0e7f6594b31c3cc162",
  "name" : "Al Allison",
  "email" : "al@fakeemail.com",
  "organization" : "5b4e4d5f808c7eebc9f9e82c",
  "location" : "Conshohocken, PA",
  "username" : "actingstudent",
  "password" : "$2a$12$gPUKBtiXwchWW5Y/aBApcei3J69hV23pZDBQOFf4phK98uFdIzcwW",
  "requestReason" : "PD",
  "accountType" : "T",
  "actingRole" : "student",
  "history" : [],
  "assignments" : ["5b91743a3da5efca74705773"],
  "answers" : [],
  "sections" : [{
    "role" : "student",
    "sectionId" : "5b9149a32ecaf7c30dd4748f"
}],
  "isEmailConfirmed" : true,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-12T13:29:14.361Z",
  "isTrashed" : false,
  "createDate" : "2018-09-12T02:41:40.407Z",
  "lastSeen" : "2018-09-12T13:28:36.769Z",
  "authorizedBy" : null,
  "createdBy" : null,
  "lastModifiedBy" : "5b245760ac75842be3189525",
  "seenTour" : null
},
{
  "_id" : "52a695c2cc319831440007d0",
  "createDate" : "2014-08-04T15:55:20.985Z",
  "isAdmin" : false,
  "isAuthorized" : true,
  "isTrashed" : false,
  "key" : "66036721-6f3f-4adf-90d9-d4192ff5f9ff",
  "lastSeen" : "2015-03-22T12:38:55.745Z",
  "name" : "",
  "seenTour" : null,
  "username" : "mr_stadel",
  "lastModifiedDate" : "2018-08-27T19:17:23.796Z",
  "accountType" : "T",
  "createdBy": "52a695c2cc319831440007d0"
},
{
  "_id" : "5ba7bedd2b7ba22c38a554fc",
  "confirmEmailExpires" : "2018-09-24T16:27:09.309Z",
  "confirmEmailToken" : "b0d1c5208859919cdf1dd0b55bbe2e5de5c88e2c",
  "name" : "Tim Pool",
  "email" : "tpool@fakeemail.com",
  "organization" : "5b4e4b48808c7eebc9f9e827",
  "location" : "Philadelphia, PA",
  "username" : "tpool",
  "password" : "$2a$12$WA5cZStBrgopuQ1xD6RS2eO9EtNYHiBiQp137DdWgEldG5SSIpSJW",
  "requestReason" : "Professional Development",
  "accountType" : "P",
  "actingRole" : "teacher",
  "assignments" : [],
  "answers" : [],
  "sections" : [],
  "isEmailConfirmed" : true,
  "isAuthorized" : true,
  "lastModifiedDate" : "2018-09-23T16:27:52.131Z",
  "isTrashed" : false,
  "createDate" : "2018-09-23T14:55:15.655Z",
  "lastSeen" : "2018-09-23T16:27:12.329Z",
  "authorizedBy" : "5b245760ac75842be3189525",
  "createdBy" : null,
  "googleId" : null,
  "lastModifiedBy" : "5b245760ac75842be3189525",
  "organizationRequest" : null,
  "seenTour" : null
},
{
  "_id" : "5bbe04dbecd6e597fd8fc177",
  "isTrashed" : true,
  "username": "trasheduser",
  "accountType": "T"
}

];

var UsersSeeder = Seeder.extend({
  shouldRun: function () {
    return User.count().exec().then(count => count === 0);
  },
  run: function () {
    return User.create(data);
  }
});

module.exports = UsersSeeder;