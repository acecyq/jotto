import actionTypes from '../actions/ActionTypes';

export default (state=false, action) => {
	switch (action.type) {
		case actionTypes.CORRECT_GUESS:
			return true;
			break;
		default:
			return false;
	}
};