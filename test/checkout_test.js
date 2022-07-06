const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Checkout = require("../models/CheckoutSchema");
const server = require("../index");

mocha.describe("CRUD testing for save customers", () => {
  let id;
  mocha.beforeEach((done) => {
    Checkout.deleteMany({})
      .then(() => {
        Checkout.create({
          firstName: "Bob",
          lastName: "Bobber",
          phoneNumber: "12345678912",
          email: "email@email.com",
          date: "01-01-26",
          time: "15:00",
          film: "A film",
          message: "A message",
          cart: [],
        })
          .then((result) => {
            id = result._id;
            email = result.email;
            done();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });

  mocha.it("should create a save Customer", (done) => {
    const requestBody = {
      firstName: "Bobb",
      lastName: "Bobber",
      phoneNumber: "12345678912",
      email: "email@email.com",
      date: "2023-01-01T00:00:00.000Z",
      time: "15:00",
      film: "A film",
      message: "A message",
      // cart: [],
    };
    chai
      .request(server)
      .post("/saveCustomer/create")
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(requestBody);
        done();
      });
  });

  mocha.it("should find all the saveCustomers", (done) => {
    chai
      .request(server)
      .get("/saveCustomer/read")
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          firstName: "Bob",
          lastName: "Bobber",
          phoneNumber: "12345678912",
          email: "email@email.com",
          date: "2026-01-01T00:00:00.000Z",
          time: "15:00",
          film: "A film",
          message: "A message",
          // cart: [{ id: 1, quantity: 2 }, { id: 2, quantity: 3 }],
        });
        done();
      });
  });

  mocha.it("should find saveCustomers by email", (done) => {
    chai
      .request(server)
      .get(`/saveCustomer/read/username/${email}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          firstName: "Bob",
          lastName: "Bobber",
          phoneNumber: "12345678912",
          email: "email@email.com",
          date: "2026-01-01T00:00:00.000Z",
          time: "15:00",
          film: "A film",
          message: "A message",
          // cart: [
          //   { id: 1, quantity: 2 },
          //   { id: 2, quantity: 3 },
          // ],
        });
        done();
      });
  });

  mocha.it("should find saveCustomers by ID", (done) => {
    chai
      .request(server)
      .get(`/saveCustomer/read/id/${id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          firstName: "Bob",
          lastName: "Bobber",
          phoneNumber: "12345678912",
          email: "email@email.com",
          date: "2026-01-01T00:00:00.000Z",
          time: "15:00",
          film: "A film",
          message: "A message",
          // cart: [
          //   { id: 1, quantity: 2 },
          //   { id: 2, quantity: 3 },
          // ],
        });
        done();
      });
  });

  mocha.it("should update a saveCustomer", (done) => {
    const requestBody = {
      firstName: "john",
      lastName: "doe",
      phoneNumber: "000000000",
      email: "emailadawdads@email.com",
      date: "2026-01-01T00:00:00.000Z",
      time: "09:00",
      film: "A film",
      message: "A message",
    };
    chai
      .request(server)
      .put(`/saveCustomer/update/${id}`)
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  mocha.it("should delete a saveCustomer by ID", (done) => {
    chai
      .request(server)
      .delete(`/saveCustomer/delete/${id}`)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(res).to.have.status(204);
        chai.expect(res.body).to.not.be.null;
        done();
      });
  });
});
