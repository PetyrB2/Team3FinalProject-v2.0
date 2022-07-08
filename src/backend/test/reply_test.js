const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Reply = require("../models/ReplySchema");
const Comment = require("../models/CommentSchema");
const server = require("../index");

mocha.describe("CRUD testing for replys", () => {
  let c_id;
  mocha.beforeEach((done) => {
    Comment.deleteMany({})
      .then(() => {
        Comment.create({
          Username: "Username",
          Message: "A message",
          filmName: "A film",
          filmRating: 2,
        })
          .then((result) => {
            c_id = result._id;
            done();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });

  let id;
  mocha.beforeEach((done) => {
    Reply.deleteMany({})
      .then(() => {
        Reply.create({
          Username: "Username",
          Message: "A message",
          Comment: c_id.toString(),
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

  mocha.it("should create a reply", (done) => {
    const requestBody = {
      Username: "Username 2",
      Message: "A message 2",
    };
    chai
      .request(server)
      .post(`/reply/create/${c_id}`)
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(requestBody);
        done();
      });
  });

  mocha.it("should find all the replies", (done) => {
    chai
      .request(server)
      .get("/reply/read")
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          Username: "Username",
          Message: "A message",
        });
        done();
      });
  });

  mocha.it("should find replies by comment ID", (done) => {
    chai
      .request(server)
      .get(`/reply/read/id/${c_id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;

        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          Username: "Username",
          Message: "A message",
        });
        done();
      });
  });

  mocha.it("should update a reply", (done) => {
    const requestBody = {
      Message: "A message 3",
    };
    chai
      .request(server)
      .put(`/reply/update/${id}`)
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.not.be.null;
        done();
      });
  });

  mocha.it("should delete a reply by ID", (done) => {
    chai
      .request(server)
      .delete(`/reply/delete/${id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(204);
      });
    done();
  });
});
