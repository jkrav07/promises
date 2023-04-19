/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
//var promises = require('promisification');

var readFirstLineObj = require('./callbackReview.js');
let pluckFirstLineFromFilePromise = Promise.promisify(readFirstLineObj.pluckFirstLineFromFile);
let getGitHubProfileAsyncObj = require('./promisification.js');
let getGitHubProfileAsync = getGitHubProfileAsyncObj.getGitHubProfileAsync;
let writeFilePromise = Promise.promisify(fs.writeFile);





var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluckFirstLineFromFilePromise(readFilePath)
    .then(username => {
      return getGitHubProfileAsync(username);
    }, err => { console.log(err); })
    .then(body => {
      return writeFilePromise(writeFilePath, JSON.stringify(body));
    })
    .catch(err => {console.log(err); });

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
