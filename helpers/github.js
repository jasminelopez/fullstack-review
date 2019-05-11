const request = require('request');
const config = require('../config.js');
var Promise = require('bluebird');

//this should be an asynchronous HTTP request to the github API 

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    Method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    json: true // will JSON.parse(body) for us
  };

  request(options, function(err, res, body) {
    if (err) {
      callback(err, null);
    } 
    callback(null, body);
    console.log('Upload successful! Server responded with:', body);
  });
}

var getReposByUsernameAsync = Promise.promisify(getReposByUsername);

module.exports.getReposByUsernameAsync = getReposByUsernameAsync;