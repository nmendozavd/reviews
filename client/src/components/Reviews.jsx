import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewsHeader from './ReviewsHeader.jsx';

function Reviews(props) {
  let myArray = props.reviews;
  let stats = {
    
  };

  return (
    <div className="Reviews">
      <ReviewsHeader reviewsStats={}/>
      {props.reviews.map(r => <ReviewEntry review={r} />)}
    </div>
  );
};

export default Reviews;