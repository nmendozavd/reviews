const db = require('../../database/mysql/db.js');

exports.getListing = (req, res) => {
  let listing_id = req.params.listing_id;
  let query = "SELECT * FROM listings l INNER JOIN reviews r ON l.listing_id = r.listing WHERE l.listing_id = ?";
  db.query(query, listing_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(`Read Listing #${listing_id}!`);
      res.send(data);
      res.status(200);
    }
  })
};


exports.postReview = (req, res) => {
  let listing = req.params.listing_id;
  let review_id = req.params.review_id;
  let query = "INSERT INTO reviews (`review_id`, `date`, `comment`, `reviewOverall`, `reviewCommunication`, `reviewCheck_in`, `reviewCleanliness`, `reviewAccuracy`, `reviewLocation`, `reviewValue`, `host`, `listing`, `user`) \
  VALUES (?, STR_TO_DATE('17/07/2013 18:33:55', '%d/%m/%Y %H:%i:%s'), 'This is a Query comment review from postReview', 4.3, 4.1, 4.2, 4.3, 3.0, 3.2, 3.3, 200, ?, 400)"
  let reviews = [review_id, listing];
  db.query(query, reviews, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(`Posted Review #${review_id}!`);
      res.send(`Posted Review #${review_id}!`);
    }
  })
}

exports.updateReview = (req, res) => {
  let review_id = req.params.review_id;
  let query = "UPDATE reviews SET comment = 'Comment Updated with API Request' WHERE review_id = ?";
  db.query(query, review_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(`Updated Review #${review_id}!`);
      res.send(`Updated Review #${review_id}!`);
    }
  })
}

exports.deleteReview = (req, res) => {
  let review_id = req.params.review_id;
  let query = "DELETE FROM reviews WHERE review_id = ?";
  db.query(query, review_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(`Deleted Review #${review_id}!`);
      res.send(`Deleted Review #${review_id}!`);
    }
  })
}