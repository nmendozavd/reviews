import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const Reviews = function (props) {
  const randomAvatar = `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`;
  const review = {
    avatar: randomAvatar,
    firstName: 'David',
    date: 'January 2020',
    reviewText: 'Dolore officiis rerum ab. Dolores provident et deleniti sunt magnam a facilis corporis et. Aut adipisci ipsa ut est quia quia et. Asperiores doloremque assumenda quos eum quo. Eveniet earum quis ducimus debitis consequatur voluptatem non.\n \rAd culpa ut amet qui. Maiores voluptatem doloribus voluptatum totam qui non alias quia. Ducimus deserunt autem. Unde sequi non sit. Sed minus tempora consequatur. Nisi possimus necessitatibus.\n \rOmnis ut nihil voluptatibus in sunt sunt ducimus reiciendis molestiae. Culpa officia delectus ad voluptatem dicta maxime excepturi doloremque. Eum ut et soluta ut libero quam quia. Placeat dolore debitis non id inventore temporibus vitae consequatur. Aut aut aut iure voluptas facere totam placeat eos modi.'
  };
  return (
    <div className="Reviews">
      <h1>Reviews</h1>
      <ReviewEntry review={review}/>
    </div>
  )
}

export default Reviews;