const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'MongoDB secret', {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false
});

const db = mongoose.connection;
// Connect to MongoDB
db.on('connected', function () {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
