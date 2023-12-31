/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  let promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {

      if (err) {
        console.log('pluck Err:', err);
        reject(err);
      } else {
        var firstLine = data.toString().split('\n')[0];
        resolve(firstLine);
      }

    });
  });
  return promise;
};
//pluckFirstLineFromFile('aaaa').then(data);



// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  let promise = new Promise((resolve, reject) => {
    request.get(url, (err, response) => {
      if (err) {
        console.log('Invalid URI', err);
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });

/*
  request('get', url)
    .then((resp) => {
      return resp.statusCode;
    })
    .catch(err => {
      console.log('Invalid URI');
    });


//////////////////////
  request.get(url, (err, response) => {
    if (err) {
      console.log('Invalid URI', err);
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });
  */
  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
