const express = require('express');
let app = express();
var request = require('request');
var bodyParser = require('body-parser');
var githubHelpers = require('../helpers/github');
var db = require('../database/index');
var repoModel = require('../database/index');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/repos', function (req, res, next) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //getting ALL the repo data synchronously from the github API
  return githubHelpers.getReposByUsernameAsync(req.body.name)
  .then(function(repoData) {
    console.log(repoData);
    })
    // .then(function(repoData) {
    //   console.log(repoData);
    // }) 
  .catch(next);
  // allRepos.forEach(function(repo) {
  //   console.log(repo);
  // })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

