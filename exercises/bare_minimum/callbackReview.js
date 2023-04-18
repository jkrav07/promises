/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, data) => {

    if (err) {
      console.log('pluck Err:', err);
      callback(err, null);
    } else {
      var firstLine = data.toString().split('\n')[0];
      callback(null, firstLine);
    }
    //callback(err, firstLine);
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // send get to url
  request.get(url, (err, response) => {
    if (err) {
      console.log('Invalid URI', err);
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
