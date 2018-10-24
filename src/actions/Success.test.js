import React from 'react';
import { shallow } from 'enzyme';

import actionTypes from './ActionTypes';
import { correctGuess } from './Success';

test('action should return an object with type relevant in actionTypes', () => {
	expect(correctGuess().type).toBe(actionTypes.CORRECT_GUESS);
});