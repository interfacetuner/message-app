const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://SEI:Weezer@cluster0.7peh7.mongodb.net/messages?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
