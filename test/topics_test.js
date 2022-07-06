const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Topic = require("../models/TopicsSchema");
const server = require("../index");

mocha.describe("CRUD testing", () => {
  let id;
  mocha.beforeEach((done) => {
    Topic.deleteMany({})
      .then(() => {
        Topic.create({
          Topic: "A topic",
        })
          .then((result) => {
            id = result._id;
            topicName = result.Topic;
            done();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });

  mocha.it("should create a topic", (done) => {
    const requestBody = {
      Topic: "A topic 2",
    };
    chai
      .request(server)
      .post("/topic/create")
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(requestBody);
        done();
      });
  });

  mocha.it("should find all the topics", (done) => {
    chai
      .request(server)
      .get("/topic/read")
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        done();
      });
  });

  mocha.it("should find topics by name", (done) => {
    chai
      .request(server)
      .get(`/topic/read/name/${topicName}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        done();
      });
  });

  mocha.it("should find topics by ID", (done) => {
    chai
      .request(server)
      .get(`/topic/read/id/${id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          Topic: "A topic",
        });
        done();
      });
  });

  mocha.it("should update a topic", (done) => {
    const requestBody = {
      Topic: "A topic 3",
    };
    chai
      .request(server)
      .put(`/topic/update/${id}`)
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        done();
      });
  });

  mocha.it("should delete a topic by ID", (done) => {
    chai
      .request(server)
      .delete(`/topic/delete/${id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(204);
        done();
      });
  });
});
