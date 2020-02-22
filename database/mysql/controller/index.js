module.exports = {
  getListing: (req, res) => {
    let listing_id = req.params.listing_id;
    let query = 'SELECT * FROM listings l INNER JOIN reviews r ON l.listing_id = r.listing WHERE l.listing_id = ?', listing_id, ((err ))
  }


}