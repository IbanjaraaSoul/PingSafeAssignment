This an extensive test plan and test frameworm against the application here : https://github.com/abhishek-pingsafe/sdet-assignment/tree/main

Tesst plan : testPlan.md 

API automation tool used : Cypress
Langauge : Javascript
Reporting : Mochawesome

Steps to run the project in local

1. Make sure system has latest version of node.js installed
2. Clone the project in local and execute "npm i" at the root directory
3. To run refer "scripts" in the package.json file  ( select the desired command and hit with "npm run command" at root directory)
4. For running in headed mode , excute "testHeaded" , wait for cypress to launch ( it might take few minutes first time and might fail as well , please try once more) - > Once cypress is launched , click on E2E testing -> Select browser as chrome or electron -> Under E2E specs , click on smoke.cy.js to start the excution - > execution should start by itself and show pass/fail report . 
5. To open the report post execution execute "openInMac" command in a separte terminal to open 
6. For running in headless mode , execute "testHeadless" -> execution should start with a report at the end. Againt we can repeat step 5 to see the report or directly run command "test:report:macOS" ("test:report:winOS" for windows OS ) to automatically generate the report after running the tests.
