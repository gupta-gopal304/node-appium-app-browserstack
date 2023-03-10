let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
desiredCaps = {
  // Set your BrowserStack access credentials
  'browserstack.user' : 'gopalgupta_2rzYBm',
  'browserstack.key' : 'F5weLDx6NJMiHwepy2cy',
    // Set app_url of the application under test
  'app' : 'bs://d9997845b0a9819bd16e32779fe894485777a34d',
  // Specify device and os_version for testing
  'device' : 'Google Pixel 6',
  'os_version' : '12.0',
  // Set other BrowserStack capabilities
  'project' : 'First NodeJS project',
  'build' : 'browserstack-build-1',
  'name': 'first_test'
};
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
// Test case for the BrowserStack sample iOS app. 
// If you have uploaded your app, update the test case here.
driver.init(desiredCaps)
  //Write your custom code here
  .fin(function() { 
    // Invoke driver.quit() after the test is done to indicate that the test is completed.
    return driver.quit(); 
  })
  .done();
