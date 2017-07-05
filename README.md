# SpyingARoute
A simple test with sinonjs spy on an expressjs route.

Pre-requisites - Nodejs - nodejs.org, sinonjs - npm install sinonjs --save-dev, supertest - npm install supertest --save-dev, expressjs - npm install expess --save-dev, mocha - npm install mocha --save-dev

The spy, created with sinonjs, spies on the server variable that encapsulates and runs the server.js (instead of running it with node) provided by supertest and aserts with sinon's assert method to determine the number of times a request was made to the /about route define in the server.js file. Sinon's assertion helps in getting a more clear assertion messages than if you wer to use the assert library.

Browse to the test folder in your Node prompt and run 'mocha usertest.js'
