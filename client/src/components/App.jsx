import React from 'react';
import Reviews from './Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      reviews: []
    };

    axios.get(`/v1/api/${Math.floor(Math.random() * 100)}/reviews`)
      .then((response) => {
        this.setState({ reviews: response })
      })
      .catch((error) => { console.log('Could not get the data from the server', error) });


  }
  render() {


    return (<Reviews reviews={this.state.reviews} />);
  }
}

export default App;
