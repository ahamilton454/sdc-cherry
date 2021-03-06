import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import ProductControls from '../../client/overview/ProductControls.jsx';
import {testDataProduct, testDataStyles, testDataSelectedStyle} from './testData.js';

describe('rendering', () => {

  describe('in the initial state', () => {

    const wrapper = shallow(<ProductControls product={testDataProduct} style={testDataSelectedStyle} styles={testDataStyles} />);

    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    })

  })

});

