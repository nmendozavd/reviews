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

  }
);
