const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Comment = require("../models/CommentSchema");
const server = require("../index");
const Topic = require("../models/TopicsSchema");

mocha.describe("CRUD testing for comments", () => {
  let t_id;
  mocha.beforeEach((done) => {
    Topic.deleteMany({})
      .then(() => {
        Topic.create({
          Topic: "A topic",
        })
          .then((result) => {
            t_id = result._id;
            done();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });

  let id;
  mocha.beforeEach((done) => {
    Comment.deleteMany({})
      .then(() => {
        Comment.create({
          Username: "Username",
          Message: "A message",
          filmName: "A film",
          filmRating: 2,
          Topic: t_id.toString(),
        })
          .then((result) => {
            id = result._id;
            username = result.Username;
            done();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });

  mocha.it("should create a comment", (done) => {
    const requestBody = {
      Username: "Username 2",
      Message: "A message 2",
      filmName: "A film 2",
      filmRating: 8,
    };
    chai
      .request(server)
      .post(`/comment/create/${t_id}`)
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(requestBody);
        done();
      });
  });

  mocha.it("should find all the comments", (done) => {
    chai
      .request(server)
      .get("/comment/read")
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          Username: "Username",
          Message: "A message",
          filmName: "A film",
          filmRating: 2,
        });
        done();
      });
  });

  mocha.it("should find all the comments by topic id", (done) => {
    chai
      .request(server)
      .get(`/comment/read/id/${t_id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          Username: "Username",
          Message: "A message",
          filmName: "A film",
          filmRating: 2,
        });
        done();
      });
  });

  mocha.it("should find comments by username", (done) => {
    chai
      .request(server)
      .get(`/comment/read/username/${username}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          Username: "Username",
          Message: "A message",
          filmName: "A film",
          filmRating: 2,
        });
        done();
      });
  });

  mocha.it("should find comments by ID", (done) => {
    chai
      .request(server)
      .get(`/comment//readComment/${id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;

        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          Username: "Username",
          Message: "A message",
          filmName: "A film",
          filmRating: 2,
        });
        done();
      });
  });

  mocha.it("should update a comment", (done) => {
    const requestBody = {
      Message: "A message 3",
      filmName: "A film 3",
      filmRating: 8,
    };
    chai
      .request(server)
      .put(`/comment/update/${id}`)
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        done();
      });
  });

  mocha.it("should delete a comment by ID", (done) => {
    chai
      .request(server)
      .delete(`/comment/delete/${id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(204);
      });
    done();
  });
});
