import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewsHeader from './ReviewsHeader.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviews: props.reviews
    }
  }
  //   const reviewEntriesArray = [
  //   {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/xamorep/128.jpg',
  //     firstName: 'Zack',
  //     date: 'January 2018',
  //     reviewText: 'Dolore officiis rerum ab. Dolores provident et deleniti sunt magnam a facilis corporis et. Aut adipisci ipsa ut est quia quia et. Asperiores doloremque assumenda quos eum quo. Eveniet earum quis ducimus debitis consequatur voluptatem non.\n \rAd culpa ut amet qui. Maiores voluptatem doloribus voluptatum totam qui non alias quia. Ducimus deserunt autem. Unde sequi non sit. Sed minus tempora consequatur. Nisi possimus necessitatibus.\n \rOmnis ut nihil voluptatibus in sunt sunt ducimus reiciendis molestiae. Culpa officia delectus ad voluptatem dicta maxime excepturi doloremque. Eum ut et soluta ut libero quam quia. Placeat dolore debitis non id inventore temporibus vitae consequatur. Aut aut aut iure voluptas facere totam placeat eos modi.'
  //   },
  //   {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/derekcramer/128.jpg',
  //     firstName: 'Adrian',
  //     date: 'July 2019',
  //     reviewText: 'Dolore voluptatum illum iste. Labore qui sapiente ut et sequi sit nisi sit. Ab animi quae'
  //   },
  //   {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/homka/128.jpg',
  //     firstName: 'Gal',
  //     date: 'December 2019',
  //     reviewText: 'Alias esse in eum possimus praesentium et aspernatur. Voluptatem veritatis vero et voluptatem reprehenderit quas amet placeat sint. Explicabo illo ut modi sapiente. Dolorum quis aut ipsa et consequuntur amet iure sapiente voluptas. Ad quasi dolor. Aspernatur sunt doloribus repellat fugit atque odio et aut optio.'
  //   },
  //   {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg',
  //     firstName: 'Violette',
  //     date: 'August 2017',
  //     reviewText: '"Sit eos rerum quod omnis. Vero adipisci architecto sequi. Et occaecati recusandae amet maiores aut velit assumenda. Beatae sit ea exercitationem a eum corporis facilis est iste.'
  //   },
  //   {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bradenhamm/128.jpg',
  //     firstName: 'Douglas',
  //     date: 'August 2018',
  //     reviewText: 'Id facere sunt vel officiis et nobis culpa vero. Eum est atque eveniet qui mollitia. Illum quaerat deserunt. Quidem dicta nihil eaque incidunt. Dolorem explicabo eaque impedit corporis dolor eius soluta harum. Rerum rerum odio suscipit.'
  //   },
  //   {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mashaaaaal/128.jpg',
  //     firstName: 'Marielle',
  //     date: 'May 2019',
  //     reviewText: 'Impedit culpa molestiae asperiores accusamus. Nam et quia corporis. Eos modi molestiae sapiente.'
  //   },
  //   {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ankitind/128.jpg',
  //     firstName: 'Darrell',
  //     date: 'February 2019',
  //     reviewText: 'Quos laboriosam quidem vel doloremque porro expedita. Sapiente quis nobis at distinctio qui placeat nihil assumenda omnis. Et velit dolorum dolorum maiores quod rem perferendis. Cum saepe tenetur et numquam. Eos maxime dolorem voluptatem nihil. Ducimus explicabo nobis labore et.'
  //   },
  // ];

  render() {
    // console.log(this.props);
    // console.log(this.props.reviews.data);
    // console.log(this.state.reviews)
    let myArray = this.props.reviews;
    // console.log(Array.isArray(myArray));
    return (
      <div className="Reviews">
        <ReviewsHeader />
        {/* {reviewEntriesArray.map(r => <ReviewEntry review={r} />)} */}
        {/* {this.state.reviews.map(r => <ReviewEntry review={r} />)} */}
        {this.props.reviews.map(r => <ReviewEntry review={r} />)}
      </div >
    );
  }
};

export default Reviews;