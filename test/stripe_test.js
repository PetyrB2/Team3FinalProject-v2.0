const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Checkout = require("../models/CheckoutSchema");
const server = require("../index");

mocha.describe("Stripe api test", () => {
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
  mocha.it("should post to stripe", (done) => {
    const requestBody = {
      items: [
        { id: 1, quantity: 2 },
        { id: 3, quantity: 3 },
      ],
    };
    chai
      .request(server)
      .post("/checkout/create-checkout-session/")
      .send(requestBody)
      .end((err, res) => {
        if (err) done(err);
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        done();
      });
  });
});
