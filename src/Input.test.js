import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';

import { findByAttr } from '../test/testUtils';
import Input from './Input';
import Reducer from './reducers/Index';

const setup = () => {
	const store = createStore(Reducer);
	return shallow(<Input store={store} />);
};

setup();

describe('render', () => {
	describe('word has not been guessed', () => {
		let wrapper;
		beforeEach(() => {
			let wrapped = setup();
			wrapper = wrapped.setProps({success: false}).dive();
		});

		test('renders component without error', () => {
			expect(findByAttr(wrapper, 'input').length).toBe(1);
		});

		test('renders input box', () => {
			expect(findByAttr(wrapper, 'input-input').length).toBe(1);
		});

		test('renders submit button', () => {
			expect(findByAttr(wrapper, 'input-button').length).toBe(1);
		});
	});

	describe('correct guess!', () => {
		let wrapper;
		beforeEach(() => {
			let wrapped = setup();
			wrapper = wrapped.setProps({success: true}).dive();
		});

		test('renders component without error', () => {
			expect(findByAttr(wrapper, 'input').length).toBe(0);
		});

		test('renders input box', () => {
			expect(findByAttr(wrapper, 'input-input').length).toBe(0);
		});

		test('renders submit button', () => {
			expect(findByAttr(wrapper, 'input-button').length).toBe(0);
		});
	});
});
