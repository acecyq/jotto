import React from 'react';

import Success from './Success';
import { correctGuess } from '../actions/Success';

test('returns default initial state of "false" when no action is passed', () => {
	expect(Success(undefined, {}).success).toBe(false);
});

test('returns state of true upon receiving an action of type "CORRECT_GUESS"', () => {
	expect(Success(undefined, correctGuess()).success).toBe(true);
});