import { postApiCall } from "../fixtures/utils/utilFunc";
import { getApiCall } from "../fixtures/utils/utilFunc";
import { genRanStr } from "../fixtures/utils/utilFunc";
import * as data from "../fixtures/data/data.json";

let uniqueId;

describe("Smoke Suite for PingSafe project", () => {
  before(
    "this is a pre test to next test just to make sure that next one is executed only when this passes i.e. to check if id is unique",
    () => {
      uniqueId = genRanStr(10);
      getApiCall(false, data.token.valid, data.userAgent.valid, uniqueId).then(
        (response) => {
          expect(response.status).to.eq(400);
        }
      );
    }
  );

  it("Verify that POST request is success with 200 ok response and message `customer created` when valid request body and valid headers is sent", async () => {
    try {
      postApiCall(
        true,
        data.token.valid,
        data.userAgent.valid,
        uniqueId,
        data.name.valid,
        data.phone.valid
      ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(
          data.responseBody.message.customerCreated
        );
      });
    } catch (err) {
      console.error(err);
      throw new Error("test fails here, please debug");
    }
  });
  
  it("Verify that appropriate response is sent with 200 ok when a valid customer id present in the database is passed in the GET request", () => {
    try {
      getApiCall(true,data.token.valid, data.userAgent.valid,data.id.alreadyCreated).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq("1");

      });
    } catch (err) {
      console.error(err);
      throw new Error("test fails here, please debug")
    }
  });

  it("Verify that POST request should not take less than 10 seconds for database update with new user", () => {
    try {
      let id = genRanStr(10);
      postApiCall(true,data.token.valid, data.userAgent.valid,id, data.name.valid, data.phone.valid).then((response) => {
        expect(response.status).to.eq(200);
        cy.wait(9000);
        getApiCall(false,data.token.valid, data.userAgent.valid,id).then((response) => {
          expect(response.status).to.eq(400);
        });
      });
    } catch (err) {
      console.error(err);
      throw new Error("test fails here, please debug")
    }
  });

  it("Verify that POST request should not take more than 20 seconds for database update with new user", () => {
    try {
      let id = genRanStr(10);
      postApiCall(true,data.token.valid, data.userAgent.valid,id, data.name.valid, data.phone.valid).then((response) => {
        expect(response.status).to.eq(200);
        cy.wait(20000);
        getApiCall(false,data.token.valid, data.userAgent.valid,id).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    } catch (err) {
      console.error(err);
      throw new Error("test fails here, please debug")
    }
  });
});
