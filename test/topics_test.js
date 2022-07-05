const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Topic = require("../routes/Topics");
const server = require("../index")

mocha.describe("CRUD testing for topics", () => {
    let id;
    mocha.beforeEach((done) => {
      Topic.deleteMany({})
        .then((done) => {
          Topic.create({
            Topic: "A topic"
          })
            .then((result) => {
              id = result._id;
              done();
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
        done();
    });

    mocha.it("should create a topic", (done) => {
        const requestBody = {
            Topic: "A topic 2"
        };
        chai
            .request(server)
            .post("/topic/create")
            .send(requestBody)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include(requestBody);
                done();
            });
            done();
    });

    mocha.it("should find all the topics", (done) => {
        chai
            .request(server)
            .get("/topic/read")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    _id: id.toString(),
                    Topic: "A topic"
                });
                return done();
            });
            done();
    });

    mocha.it("should find topics by name", (done) => {
        chai
            .request(server)
            .get("/topic/read/name/:name")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    _id: id.toString(),
                    Topic: "A topic"
                });
                return done();
            });
        done();
    });
    
    mocha.it("should find topics by ID", (done) => {
        chai
            .request(server)
            .get(`/topic/read/id/${id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    _id: id.toString(),
                    Topic: "A topic"
                });
                return done();
            });
        done();
    });

    mocha.it("should update a topic", (done) => {
        const requestBody = {
            Topic: "A topic 3"
        };
        chai
            .request(server)
            .put(`/topic/update/${id}`)
            .send(requestBody)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include(requestBody);
                });
                return done();
            });
            
    mocha.it("should delete a topic by ID", (done) => {
        chai
            .request(server)
            .delete(`/topic/delete/${id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(204);
                chai.expect(res.body).to.have.lengthOf(0);
                });
                return done();
            });
    });
