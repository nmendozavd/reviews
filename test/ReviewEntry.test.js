import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewEntry from '../client/src/components/ReviewEntry.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe(
  'ReviewEntry', () => {
    const review = {
      avatar: 'portrait1.jpg',
      firstName: 'David',
      date: 'January 2020',
      reviewText: 'lorem ipsum'
    };

    ;

    it('Displays the avatar of the user', () => {
      const wrapper = shallow(<ReviewEntry review={review} />)
      expect(wrapper.find('img').props().src).toEqual('portrait1.jpg');
    });

    it('Displays the first name of the user', () => {
      const wrapper = shallow(<ReviewEntry review={review} />);
      // expect(wrapper.find('h2').text()).toEqual('David');
      expect(wrapper.contains('David')).toBe(true);
    });
    
    it('Displays the date of the review', () => {
      const wrapper = shallow(<ReviewEntry review={review} />);
      // expect(wrapper.find('h2').text()).toEqual('January 2020');
      expect(wrapper.contains('January 2020')).toBe(true);
    });
    
    it('Displays the text of the review', () => {
      const wrapper = shallow(<ReviewEntry review={review} />);
      // expect(wrapper.find('h2').text()).toEqual('lorem ipsum');
      expect(wrapper.contains('lorem ipsum')).toBe(true);
    });
  }
);
