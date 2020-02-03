import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewEntry from '../client/src/components/ReviewsHeader.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe(
  'ReviewsHeader', () => {
    it('true is truthy', () => {
      expect(0).toBeTruthy()
    });
    
    it('true is truthy', () => {
      expect(0).toBeTruthy()
    });

    it('Displays the reviews title', () => {
      const wrapper = shallow(<ReviewsHeader reviews={reviews} />)
      // expect(wrapper.find('img').props().src).toEqual(randomAvatar);
      // expect(wrapper.containsMatchingElement(<Avatar />)).toBe(true);
      expect(wrapper.containsMatchingElement(<img src={randomAvatar}></img>)).toBe(true);
    });

    // it('Displays the first name of the user', () => {
    //   const wrapper = shallow(<ReviewEntry review={review} />);
    //   expect(wrapper.contains('David')).toBe(true);
    // });

    // it('Displays the date of the review', () => {
    //   const wrapper = shallow(<ReviewEntry review={review} />);
    //   expect(wrapper.contains('January 2020')).toBe(true);
    // });

  }
);
