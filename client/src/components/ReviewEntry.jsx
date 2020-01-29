import React from 'react';

const ReviewEntry = function (props) {
  return (
    <div className="ReviewEntry">
      <img src={props.review.avatar}></img>
      
    </div>
  )
}

export default ReviewEntry;