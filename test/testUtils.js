import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers/Index';

// finds the element by data-test attribute
export const findByAttr = (wrapper, attr) => {
	return wrapper.find(`[data-test='${attr}']`);
}

// check if props passed to component produces any error
export const checkProps = (componentPropTypes, testProps, componentProp) => {
	return checkPropTypes(componentPropTypes, testProps, 'prop', componentProp);
}

export const setupRedux = (state, Component) => {
	const testReducer = () => {
		return state
	}
	const store = createStore(testReducer);
	const wrapper = shallow(<Component store={store} />);
	console.log(wrapper.dive().debug());
	return wrapper.dive();
}