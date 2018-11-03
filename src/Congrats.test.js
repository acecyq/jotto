import React from 'react';

import { findByAttr, checkProps, setupRedux as setup } from '../test/testUtils';
import Congrats from './Congrats';

describe('when correct word is not guessed yet', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({success: false}, Congrats);
	})

	test('renders without error', () => {
		const congrats = findByAttr(wrapper, 'congrats');
		expect(congrats.length).toBe(0);
	});

	test('does not render when "success" = false props is passed', () => {
		const congrats = findByAttr(wrapper, 'congrats');
		expect(congrats.length).toBe(0);
	});
});

describe('when correct word has been guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({success: true}, Congrats);
	})

	test('renders when "success" = true props is passed', () => {
		const congrats = findByAttr(wrapper, 'congrats');
		expect(congrats.length).toBe(1);
	});

	test('returns no error when props is passed to component', () => {
		const error = checkProps(Congrats.PropTypes, { success: true }, Congrats.success);
		expect(error).toBeUndefined();
	});
});


