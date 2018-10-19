import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';

import { findByAttr, checkProps } from '../test/testUtils.js';

const defaultProps = { success: false }
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...setupProps} />);
}

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