const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Comment = require("../routes/Messages");
const server = require("../index")

mocha.describe("CRUD testing for comments", () => {
    let id;
    mocha.beforeEach((done) => {
        Comment.deleteMany({})
            .then((done) => {
                Comment.create({
                    items: [{
                        id: 1,
                        quantity: 4,
                    },
                    {
                        id: 3,
                        quantity: 3
                    }
                    ]
                },
                )
                    .then((result) => {
                        id = result._id;
                        done();
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        done();
    });

    mocha.it("should post to stripe", (done) => {
        const requestBody = {
            items: [{
                id: 1,
                quantity: 2,
            },
            {
                id: 3,
                quantity: 3
            }
            ]
        };
        chai
            .request(server)
            .post("/comment/create")
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
});