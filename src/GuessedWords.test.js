import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { findByAttr, checkProps } from '../test/testUtils';

const setup = (props={guessedWords: []}) => {
	return shallow(<GuessedWords {...props} />);
}

describe('when there are no words guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	test('throws no errors when there are no guessed words', () => {
		expect(checkProps(GuessedWords.PropTypes, {guessedWords: []}, GuessedWords.guessedWords)).toBeUndefined();
	});

	test('renders instructions when there are no guessed words', () => {
		expect(findByAttr(wrapper, 'guessedInstructions').length).toBe(1);
	});
});

describe('when there are guessed words', () => {
	test('throws no errors when props are passed', () => {
		const guessedWords = [{word: 'tests', match: 5}];
		const props = {guessedWords};
		expect(checkProps(GuessedWords.PropTypes, guessedWords, GuessedWords.guessedWords)).toBeUndefined();
	});

	let guessedWords = [
		{word: 'train', match: 3},
		{word: 'agile', match: 1},
		{word: 'party', match: 5}
	];
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});

	test('renders without errors', () => {
		expect(findByAttr(wrapper, 'guessedWords').length).toBe(1);
	});

	test('renders guessed words section', () => {
		expect(findByAttr(wrapper, 'guessedWords').children().length).toBe(1);
	});

	test('correct number of guessed words', () => {
		expect(findByAttr(wrapper, 'guessedWords').children().children().length).toBe(guessedWords.length + 1);
	});
});
