import React from 'react';
// var React = require('react');
import { shallow } from 'enzyme';
// var enzyme = require('react');
import App from '../client/src/components/App.jsx'

describe(
  'Test the testing enviroment',
  () => {
    it(
      'true is truthy',
      () => {
        expect(true).toBeTruthy()
      }
    )
  }
);
