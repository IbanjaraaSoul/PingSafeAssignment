import { postApiCall } from "../fixtures/utils/utilFunc";
import { getApiCall } from "../fixtures/utils/utilFunc";
import { genRanStr } from "../fixtures/utils/utilFunc";
import * as data from "../fixtures/data/data.json";

let uniqueId;

describe("Regression Suite for PingSafe project", () => {

// it("Verify that POST request should not take less than 10 seconds for database update with new user", () => {
//     try {
//       let id = genRanStr(10);
//       postApiCall(true,data.token.valid, data.userAgent.valid,id, data.name.valid, data.phone.valid).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.wait(9000);
//         getApiCall(false,data.token.valid, data.userAgent.valid,id).then((response) => {
//           expect(response.status).to.eq(400);
//         });
//       });
//     } catch (err) {
//       console.error(err);
//       throw new Error("test fails here, please debug")
//     }
//   });

//   it("Verify that POST request should not take more than 20 seconds for database update with new user", () => {
//     try {
//       let id = genRanStr(10);
//       postApiCall(true,data.token.valid, data.userAgent.valid,id, data.name.valid, data.phone.valid).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.wait(20000);
//         getApiCall(false,data.token.valid, data.userAgent.valid,id).then((response) => {
//           expect(response.status).to.eq(200);
//         });
//       });
//     } catch (err) {
//       console.error(err);
//       throw new Error("test fails here, please debug")
//     }
//   });
});