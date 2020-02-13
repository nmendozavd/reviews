const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SDC', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Ay dawg, we\'re connected to MongoDB');
})

var reviewSchema = new mongoose.Schema({

});

var Review = mongoose.model('Review', reviewSchema);
