const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost/fetcher')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('error'));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  repo: String,
  url: String,
  watchers: Number,
  description: String,
  forks: String
});

//create a model called repo 
let Repo = mongoose.model('Repo', repoSchema);

let save = (userRepo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  userRepo.save(function(err) {
    console.log('User repo has been saved to the database! woo!')
    if (err) {
      return console.error(err);
    }
  })

}
module.exports.repo = Repo;
module.exports.save = save;