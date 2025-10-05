const {defineConfig}= require('cypress');
module.exports = defineConfig ({

e2e: {

baseUrl: 'https://www.saucedemo.com',
specPattern: 'cypress/e2e/**/*.spec.js',
supportFile: 'cypress/support/index.js',
video: true,
screenshotOnRunFailure: true,
setupNodeEvents(on, confiq) {

}

}




});



  
      // add reporters / custom tasks if needed
 