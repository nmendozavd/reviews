import React from 'react';
import { shallow } from 'enzyme';
import ReviewEntry from '../client/src/components/ReviewEntry.jsx'

describe(
  'ReviewEntry', () => {
    const review = {
      avatar: 'portrait1.jpg',
      firstName: 'David',
      date: 'January 2020',
      reviewText: 'lorem ipsum'
    };

    it(
      'Displays the avatar', () => {
        const wrapper = shallow(<ReviewEntry review={review} />);
        expect(wrapper.find('img').props().src).toEqual('portrait1.jpg');
      }
    )
  }
);
