import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

// const mapStateToProps = state => ({
// 	success: state.success
// });

// export default connect(mapStateToProps)(Congrats);
export default Congrats;