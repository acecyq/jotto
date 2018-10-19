import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';

import { findByAttr, checkProps } from '../test/testUtils.js';
// import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => shallow(<Congrats {...props} />);

test('renders without error', () => {
	const wrapper = setup({ success: false });
	const congrats = findByAttr(wrapper, 'congrats');
	expect(congrats.length).toBe(0);
});

test('does not render when "success" = false props is passed', () => {
	const wrapper = setup({ success: false });
	const congrats = findByAttr(wrapper, 'congrats');
	expect(congrats.length).toBe(0);
});

test('renders when "success" = true props is passed', () => {
	const wrapper = setup({ success: true });
	const congrats = findByAttr(wrapper, 'congrats');
	expect(congrats.length).toBe(1);
});

test('returns no error when props is passed to component', () => {
	const error = checkProps(Congrats.PropTypes, { success: true }, Congrats.success);
	expect(error).toBeUndefined();
});