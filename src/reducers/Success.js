import actionTypes from '../actions/ActionTypes';

const startState = {
	success: false
};

export default (state=startState, action) => {
	switch (action.type) {
		case actionTypes.CORRECT_GUESS:
			return {
				...state,
				success: true
			};
		default:
			return state;
	}
};