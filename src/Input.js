import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
	render() {
		let contents;
		if (this.props.success === true) {
			contents = null;
		} else {
			contents = (
				<form data-test='input' >
					<input 
						data-test='input-input'
						type='text'
						placeholder='guess a word' />
					<button
						data-test='input-button' >
					</button>
				</form>
			);
		}
		// const contents = this.props.success === true 
		// 	? null 
		// 	: (
		// 		<form data-test='input' >
		// 			<input 
		// 				data-test='input-input'
		// 				type='text'
		// 				placeholder='guess a word' />
		// 			<button
		// 				data-test='input-button' >
		// 			</button>
		// 		</form>
		// 	);

		return (
			<div>
				{contents}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Input);