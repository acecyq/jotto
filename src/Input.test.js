import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = initialState => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />);
}

setup();

test('', () => {

});