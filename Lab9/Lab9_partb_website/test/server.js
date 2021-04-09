// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const { expect } = chai;
var assert = chai.assert;


//Import complete
positive_test = {num1: 1, num2: 2}
negative_test = {num1: 'a', num2: 'b'}

describe("Server!", () => {
      // Add your test cases here

      it("Add 2 nums", done => {
        chai
          .request(server)
          .post("/add").send(positive_test)
          .end((err, res) => {

          res.body.should.have.property("status").eq("success");
          expect(res.body.sum).to.equal(3);



            done();
          });
        });
        it("Add 2 negatives", done => {
          chai
            .request(server)
            .post("/add").send(negative_test)
            .end((err, res) => {

            res.body.should.have.property("status").eq(404);



              done();
            });
          });
          it("divide", done => {
            chai
              .request(server)
              .post("/divide").send(positive_test)
              .end((err, res) => {

                res.body.should.have.property("status").eq("success");
                expect(res.body.divide).to.equal(.5);



                done();
              });
            });
            it("divide negatives", done => {
              chai
                .request(server)
                .post("/divide").send(negative_test)
                .end((err, res) => {

                res.body.should.have.property("status").eq("fails");




                  done();
                });
              });
});
