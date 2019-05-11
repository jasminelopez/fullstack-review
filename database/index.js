const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost/fetcher')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('error'));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  repo: String,
  url: String,
  description: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;