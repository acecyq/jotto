import React from 'react'
import PropTypes from 'prop-types';

const Congrats = props => {
	const congrats = props.success === true ? 
		<h1 data-test='congrats'>Congrats!</h1> :
		null;
	return (
		<div>
			{congrats}
		</div>
	);
};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
}

export default Congrats;