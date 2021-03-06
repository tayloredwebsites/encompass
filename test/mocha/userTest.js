// REQUIRE MODULES
const chai = require('chai');
const chaiHttp = require('chai-http');

// REQUIRE FILES
const helpers = require('./helpers');
const userFixtures = require('./userFixtures');

const expect = chai.expect;
const host = helpers.host;
const baseUrl = "/api/users/";

chai.use(chaiHttp);

describe('User CRUD operations by account type', async function() {
  const testUsers = userFixtures.users;

  async function runTests(user) {
    await describe(`User CRUD operations as ${user.details.testDescriptionTitle}` , function() {
      this.timeout('10s');
      const agent = chai.request.agent(host);
      const { username, password, accountType, actingRole } = user.details;
      const { modifiableUser, unaccessibleUser, accessibleUser, accessibleUserCount } = user.users;

      before(async function(){
        try {
          await helpers.setup(agent, username, password);
        }catch(err) {
          console.log(err);
        }
      });

      after(() => {
        agent.close();
      });

      describe('/GET users', () => {
        it('should get all users', done => {
          agent
          .get(baseUrl)
          .end((err, res) => {
            if (err) {
              console.error(err);
            }
            expect(res).to.have.status(200);
            expect(res.body).to.have.all.keys('user');
            expect(res.body.user).to.be.a('array');
            expect(res.body.user.length).to.eql(accessibleUserCount);
            done();
          });
        });
      });
      if (accountType !== 'A') {
        /** GET **/
        describe('/GET unaccessible user by username', () => {
          it('should return 404 error', done => {
            agent
            .get(baseUrl)
            .query(`username=${unaccessibleUser.username}`)
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              expect(res).to.have.status(404);
              done();
            });
          });
        });

        /** GET **/
        describe('/GET unaccessible user by id', () => {
          it('should return 403 error', done => {
            const url = baseUrl + unaccessibleUser._id;
            agent
            .get(url)
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              expect(res).to.have.status(403);
              done();
            });
          });
        });

        describe('/PUT update unaccessible user name', () => {
          it('should return 403 error', done => {
            const url = baseUrl + unaccessibleUser._id;
            agent
            .put(url)
            .send({
              user: {
                'name': 'test name',
                'username': unaccessibleUser.username,
                'accountType': unaccessibleUser.accountType,
              }
            })
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              expect(res).to.have.status(403);
              done();
            });
          });
        });


      }

        describe('/GET accessible user by username', () => {
          it(`should return user with the username "${accessibleUser.username}"`, done => {
            agent
            .get(baseUrl)
            .query(`username=${accessibleUser.username}`)
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              expect(res).to.have.status(200);
              expect(res.body).to.have.all.keys('user');
              expect(res.body.user).to.be.a('array');
              expect(res.body.user[0].username).to.eql(accessibleUser.username);
              done();
            });
          });
        });



        describe('/GET user by id', () => {
          it(`should return the user "${accessibleUser.username}"`, done => {
            const url = baseUrl + accessibleUser._id;
            agent
            .get(url)
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              expect(res).to.have.status(200);
              expect(res.body).to.have.all.keys('user');
              expect(res.body.user).to.be.a('object');
              expect(res.body.user.username).to.eql(accessibleUser.username);
              done();
            });
          });
        });

        describe('/GET createdBy from an accessible user', () => {
          it(`should return the user "${accessibleUser.creatorUsername}"`, done => {
            const url = baseUrl + accessibleUser.createdBy;
            agent
            .get(url)
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              expect(res).to.have.status(200);
              expect(res.body).to.have.all.keys('user');
              expect(res.body.user).to.be.a('object');
              expect(res.body.user.username).to.eql(accessibleUser.creatorUsername);
              done();
            });
          });
        });

        describe('/GET createdBy from a public problem', () => {
          const problem = userFixtures.publicProblem;
          it(`should return the user "${problem.creatorUsername}"`, done => {
            const url = baseUrl + problem.createdBy;
            agent
            .get(url)
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              expect(res).to.have.status(200);
              expect(res.body).to.have.all.keys('user');
              expect(res.body.user).to.be.a('object');
              expect(res.body.user.username).to.eql(problem.creatorUsername);
              done();
            });
          });
        });

        describe('/PUT update user name', () => {
          let description;
          if (accountType === 'S' || actingRole === 'student') {
            description = 'should return 403 error';
          } else {
            description = `should change ${modifiableUser.username}'s name from null to test name`;
          }
          it(description, done => {
            const url = baseUrl + modifiableUser._id;
            agent
            .put(url)
            .send({
              user: {
                'name': 'test name',
                'username': modifiableUser.username,
                'accountType': modifiableUser.accountType,
              }
            })
            .end((err, res) => {
              if (err) {
                console.error(err);
              }
              if (accountType === 'S' || actingRole === 'student') {
                expect(res).to.have.status(403);
                done();
                return;
              }
              expect(res).to.have.status(200);
              expect(res.body.user.username).to.eql(modifiableUser.username);
              expect(res.body.user.name).to.eql('test name');
              done();
            });
          });
        });

        describe('Put request to update acting role', function() {
          let description;
          let newRole;
          if (accountType === 'S') {
            description = 'should return 403 error';
            newRole = 'teacher';
          } else if (actingRole === 'student') {
            description = 'should toggle actingRole back to teacher';
            newRole = 'teacher';
          } else {
            description = 'should toggle actingRole to student';
            newRole = 'student';
          }

          it(description, done => {
            const url = baseUrl + user.details._id;
            agent
            .put(url)
            .send({
              user: {
                username,
                accountType,
                actingRole: newRole
              }
            })
            .end((err, res) => {
              if (err) {
                console.log(err);
              }
              if (accountType === 'S') {
                expect(res).to.have.status(403);
                done();
              } else {
                expect(res).to.have.status(200);
                expect(res.body.user.actingRole).to.eql(newRole);
                done();
              }
            });
          });
        });

    });
  }

  for (let user of Object.keys(testUsers)) {
    let testUser = testUsers[user];
    // eslint-disable-next-line no-await-in-loop
    await runTests(testUser);
  }
});

