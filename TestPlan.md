Test Plan: User Registration for sending SMS and further retrieving the user record to check SMS delivery status

Objective:
The objective of this test plan is to ensure seemless user Registration for sending SMS and further retrieving the user record to check SMS delivery status.

Scope:
This test plan covers the end-to-end testing of the user registration process, including registration form validation, user data storage, and user account creation.

Test Environment: 
Dev Env for Developmet and QA Env for QA Testing (API/Performance/Security)


Testing Approach: Combination of manual and automated testing
Test Levels: Integraion and API Testing
Test Types: Functional testing, Boundary testing, Error handling testing


Test Cases:

TC-001: Verify that "404 Not Found" error message is thrown if the URL sent in API POST or GET method is incorrect - pass

TC-002: Verify that "404 Not Found" error message is thrown along with a appropiate message in response if the method used is API is not POST or GET - fail

TC-003: Verify that "403 Forbidden" error message is thrown along with a message that "request cannot be authenticated! "min response if the mandatory header "x-session-token" is missing both for GET and POST request - pass

TC-003: Verify that "403 Forbidden" error message is thrown along with a message that "request cannot be authenticated! "min response if the mandatory header "x-session-token" is invalid both for GET and POST request - pass

TC-004: Verify that "403 Forbidden" error message is not thrown in response if the non-mandatory header "user-agent" is missing both for GET and POST request - pass

TC-005: Verify that 400 bad request error saying "id field is not sent" is thrown when id field is not passed in the GET request - fail

TC-006: Verify that 400 bad request error saying "id value is blank" is thrown when id value is not passed in the GET request - fail

TC-007: Verify that 400 bad request error saying "id value is not valid" is thrown when invalid id value is passed in the GET request - fail

TC-008: Verify that 400 bad request error saying "error while fetching customer" is thrown when id value is not present in the database in the GET Request - pass

TC-009: Verify that appropriate response is sent with 200 ok when a valid customer id present in the database is passed in the GET request

TC-011: Verify that 400 bad request error saying "request body is missing" is thrown when a blank request body is passed in the POST request - fail

TC-012: Verify that 400 bad request error saying "mandatory fields are missing, refer API contract" is thrown when a blank JSON is passed in the POST request - fail

TC-013: Verify that 400 bad request error saying "mandatory fields are missing, refer API contract" is thrown when even one of the mandatory field is missing in the request body of the POST request - fail

TC-014: Verify that 400 bad request error saying "mandatory fields are missing, refer API contract" is thrown when all the of the mandatory field is passed in the request body of the POST request but any of the field value is blank - fail

TC-015: Verify that 400 bad request error saying "mandatory fields are missing, refer API contract" is thrown when field name for any of the mandatory or non mandatory field is invalid - fail

TC-016: Verify that 400 bad request error saying "customer id must be numeric" is thrown when the customer id passed is not numeric in POST Request - fail

TC-017: Verify that 400 bad request error saying "phone number must be max 10 characters" is thrown when the phone number passed is of length more than ten characters in POST Request - fail

TC-018: Verify that 400 bad request error saying "phone number must be numeric" is thrown when the customer id passed is not numeric in POST Request - fail

Verify that "name" field in the post request is non mandatory item and no error is thrown in the POST request if the same is not passed

TC-019: Verify that 400 bad request error saying "please check the JSON format" is thrown when the JSON format is not correct in the POST request

TC-020: Verify that duplicate "phone number" and "name" is allowed in the POST API  

TC-021: Verify that POST request is success with 200 ok response and message "customer created" when valid request body and valid headers is sent

TC-022: Verify that "SMS_SENT" field is intially set to false untill backend triggers the SMS successfully to the customer

TC-023: Verify that "SMS_SENT" field is set to True once the SMS is successfully triggered in the backend.

TC-024: Verify that "SMS_SENT" field cannot be set to true before 10 seconds post successful customer creation 

TC-025: Verify that appropiate error message is thrown if parsing of string customer id to integer fails in the backend

TC-026: Verify that customer creation process is rolled back if backend goes down during mid transaction of customer creation or SMS delivery process i.e. customer id is available to be used next time in POST request.

TC-027: Verify customerid field against SQL injection i.e. it doesn't leak out any unexpected values when special SQL injection inputs are passed

TC-028: Verify that appropiate error is thrown if database writing is failed in POST request

TC-029: Verify that an appropiate error is thrown if any of the dependent backend system is down in POST or GET request

TC-030: Verify that the API starts throwing 429 error code when too many requests are sent in short interval of time

TC-031: Verify that 400 bad request error saying "bad bot, go away!" is thrown when the user agent passed has bot character in it in POST Request - pass

TC-032: Verify that 400 bad request error saying "name should not be more than  50 chars" is thrown when the name is more than 50 chars in POST Request - fail

TC-033: Verify that POST request should not take less than 10 seconds for database update with new user - pass

TC-034: Verify that POST request should not take more than 20 seconds for database update with new user - pass


Test Execution Schedule: 5 days (Date range: 05/06/2023 - 08/06/2023)
Test Execution Cycle: Iterative cycles of execution and defect retesting ( if any )

Defect Management:
Defect Tracking Tool: JIRA
Defect Reporting: Defect reports with steps to reproduce and screenshots
Defect Severity and Priority: Severity to be set by engineering Team ( Dev+QA ) and Priority to be given by Product or Business team
Test Completion Criteria: 

no PO and P1 Bugs and atleast 95% test cases are executed  
100% test coverage of the defined test cases
All high and medium severity defects are resolved and retested
Test execution report with all test cases marked as passed

Risk:
insufficiency of varity of data for edge cases 

Mitigation:
Generate test data to cover various boundary scenarios

Assumptions and Dependencies:


Test Plan Approval: [Abhishek/Karan]
Date of Approval: [02/06/2023]
