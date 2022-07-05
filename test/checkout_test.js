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
      .then((done) => {
        Checkout.create({
          firstName: "Bob",
          lastName: "Bobber",
          phonenumber: 12345678912,
          email: "email@email.com",
          date: 01 / 01 / 01,
          time: "15:00",
          film: "A film",
          message: "A message",
          cart: [
            {
              id: 1,
              quantity: 2,
            },
            {
              id: 2,
              quantity: 3,
            },
          ],
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

  mocha.it("should create a save Customer", (done) => {
    const requestBody = {
      firstName: "Bobb",
      lastName: "Bobber",
      phonenumber: 12345678912,
      email: "email@email.com",
      date: 01 / 01 / 01,
      time: "15:00",
      film: "A film",
      message: "A message",
      cart: [
        {
          id: 1,
          quantity: 2,
        },
        {
          id: 2,
          quantity: 3,
        },
      ],
    };
    chai
      .request(server)
      .post("/saveCustomer/create")
      .send(requestBody)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.have.lengthOf(2);
        chai.expect(res.body).to.include(requestBody);
        done();
      });
    done();
  });

  mocha.it("should find all the saveCustomers", (done) => {
    chai
      .request(server)
      .get("/saveCustomer/read")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          firstName: "Bob",
          lastName: "Bobber",
          phonenumber: 12345678912,
          email: "email@email.com",
          date: 01 / 01 / 01,
          time: "15:00",
          film: "A film",
          message: "A message",
          cart: [
            {
              id: 1,
              quantity: 2,
            },
            {
              id: 2,
              quantity: 3,
            },
          ],
        });
        return done();
      });
    done();
  });

  mocha.it("should find saveCustomers by username", (done) => {
    chai
      .request(server)
      .get("/saveCustomer/read/username/:email")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          firstName: "Bob",
          lastName: "Bobber",
          phonenumber: 12345678912,
          email: "email@email.com",
          date: 01 / 01 / 01,
          time: "15:00",
          film: "A film",
          message: "A message",
          cart: [
            {
              id: 1,
              quantity: 2,
            },
            {
              id: 2,
              quantity: 3,
            },
          ],
        });
        return done();
      });
    done();
  });

  mocha.it("should find saveCustomers by ID", (done) => {
    chai
      .request(server)
      .get(`/saveCustomer/read/id/${id}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          firstName: "Bob",
          lastName: "Bobber",
          phonenumber: 12345678912,
          email: "email@email.com",
          date: 01 / 01 / 01,
          time: "15:00",
          film: "A film",
          message: "A message",
          cart: [
            {
              id: 1,
              quantity: 2,
            },
            {
              id: 2,
              quantity: 3,
            },
          ],
        });
        return done();
      });
    done();
  });

  mocha.it("should update a saveCustomer", (done) => {
    const requestBody = {
      firstName: "Bob",
      lastName: "Bobber",
      phonenumber: 12345678912,
      email: "email@email.com",
      date: 01 / 01 / 01,
      time: "15:00",
      film: "A film",
      message: "A message",
    };
    chai
      .request(server)
      .put(`/saveCustomer/update/${id}`)
      .send(requestBody)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(requestBody);
      });
    return done();
  });

  mocha.it("should delete a saveCustomer by ID", (done) => {
    chai
      .request(server)
      .delete(`/saveCustomer/delete/${id}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(204);
        chai.expect(res.body).to.have.lengthOf(0);
      });
    return done();
  });
});
