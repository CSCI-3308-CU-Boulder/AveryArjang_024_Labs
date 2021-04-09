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




describe("Server!", () => {

    // Sample test case given to test / endpoint.
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equals("success");
          assert.strictEqual(res.body.message, "Welcome!");
          done();
        });
    });

    // Please add your test cases here.
    it("Test Get /operations", done => {
      chai
        .request(server)
        .get("/operations")
        .end((err, res) => {

          console.log("res.body=", res.body);
          //Is of type array.
          //The size of the array should not be zero.
          expect(res.body).to.be.an('array').that.is.not.empty;

          //Has the property id equal to 1.
          //Has the property name.
          //Has the property sign.

          //expect(res.body.id).to.equal(1).that.is.not.empty;
          //expect(res.body.name).that.is.not.empty;
          //expect(res.body.sign).that.is.not.empty;


          done();
        });
      });


        it("Test Get /operations/:id", done => {
          chai
            .request(server)
            .get("/operations/1")
            .end((err, res) => {

              console.log("res.body=", res.body);

              //Has the property id equal to 1.
              //Has the property name.
              //Has the property sign.

            expect(res.body.id).to.equal(1);
            expect(res.body.name).that.is.not.empty;
            expect(res.body.sign).property


              done();
            });
          });

            it("Test Get /operations", done => {
              chai
                .request(server)
                .post("/operations")
                .send({name: "divide", sign:"/"})
                .end((err, res) => {

                  console.log("res.body=", res.body);

                  //Has the property id equal to 4.
                  //Has the property name equal to the name of the newly added operation..
                  //Has the property sign equal to the sign of the newly added operation..

                  expect(res.body.id).to.equal(4);
                  expect(res.body.name).to.equal("divide");
                  expect(res.body.sign).to.equal("/");


                  done();
                });
    });



  });
