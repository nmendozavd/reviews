const db = require('../../database/mysql/db.js');

exports.getListing = (req, res) => {
  let listing_id = req.params.listing_id;
  let query = ('SELECT * FROM listings l INNER JOIN reviews r ON l.listing_id = r.listing WHERE l.listing_id = ?');
  db.query(query, listing_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(`Posted Listing #${listing_id}!`);
      res.send(data);
      res.status(200);
    }
  })
};


exports.postReview = (req, res) => {
  let listing = req.params.listing;
  let review_id = req.params.review_id;
  let query = ("INSERT INTO reviews VALUES (?, '17-09-2010', 'This is a Query comment review', 4.3, 4.1, 4.2, 4.3, 3.0, 3.2, 3.3, 200, 100, 4000");
  db.query(query, review_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(data);
      res.send(`Posted Review #${review_id}!`);
    }
  })
}

exports.updateReview = (req, res) => {
  let listing = req.params.listing;
  let review_id = req.params.review_id;
  let query = ("UPDATE reviews SET comment = 'Comment Updated with API Request' WHERE review_id = ?");
  db.query(query, review_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(data);
      res.send(`Updated Review #${review_id}!`);
    }
  })
}

exports.deleteReview = (req, res) => {
  let listing = req.params.listing;
  let review_id = req.params.review_id;
  let query = ("DELETE FROM reviews WHERE review_id = ?");
  db.query(query, review_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(data);
      res.send(`Deleted Review #${review_id}!`);
    }
  })
}