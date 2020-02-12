import React from 'react';
import Reviews from './Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      stats: {}
    };

    axios.get(`/v1/api/${Math.floor(Math.random() * 100)}/reviews`)
      .then((response) => {
        this.setState({ reviews: response.data })
        const stats = getStatsAndScores(response.data);

        this.setState({ stats: stats });


      })
      .catch((error) => { console.log('Could not get the data from the server', error) });
  }
  render() {
    return (<Reviews reviews={this.state.reviews} stats={this.state.stats} />);
  }
}

export default App;

function getStatsAndScores(arrayOfReviews) {
  let res = {
    // General stats
    starAvg: 0.0,
    reviewsCount: arrayOfReviews.length,
    // 6 scores
    communicationScore: 0.0,
    accuracyScore: 0.0,
    valueScore: 0.0,
    checkinScore: 0.0,
    locationScore: 0.0,
    cleanlinessScore: 0.0
  };

  for (let i = 0; i < arrayOfReviews.length; i++) {
    res.communicationScore += parseFloat(arrayOfReviews[i].scores.communication.$numberDecimal);
    res.accuracyScore += parseFloat(arrayOfReviews[i].scores.accuracy.$numberDecimal);
    res.valueScore += parseFloat(arrayOfReviews[i].scores.value.$numberDecimal);
    res.checkinScore += parseFloat(arrayOfReviews[i].scores.checkIn.$numberDecimal);
    res.locationScore += parseFloat(arrayOfReviews[i].scores.location.$numberDecimal);
    res.cleanlinessScore += parseFloat(arrayOfReviews[i].scores.cleanliness.$numberDecimal);
  }

  // console.log(res.communicationScore);

  res.communicationScore /= arrayOfReviews.length;
  res.accuracyScore /= arrayOfReviews.length;
  res.valueScore /= arrayOfReviews.length;
  res.checkinScore /= arrayOfReviews.length;
  res.locationScore /= arrayOfReviews.length;
  res.cleanlinessScore /= arrayOfReviews.length;


  // console.log(res.communicationScore);

  res.starAvg =
    res.communicationScore +
    res.accuracyScore +
    res.valueScore +
    res.checkinScore +
    res.locationScore +
    res.cleanlinessScore;
  res.starAvg /= 6;

  res.communicationScore = res.communicationScore.toFixed(2);
  res.accuracyScore = res.accuracyScore.toFixed(2);
  res.valueScore = res.valueScore.toFixed(2);
  res.checkinScore = res.checkinScore.toFixed(2);
  res.locationScore = res.locationScore.toFixed(2);
  res.cleanlinessScore = res.cleanlinessScore.toFixed(2);

  res.starAvg = res.starAvg.toFixed(2);


  return res;
}