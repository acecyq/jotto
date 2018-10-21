import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
	let tableData;
	tableData = props.guessedWords.length > 0 ? props.guessedWords.map(data => {
			return (
				<tr key={data.word}>
					<td>{data.word}</td>
					<td>{data.match}</td>
				</tr>
			);
		}) : 
			null ;

	let guessedWords;
	if (props.guessedWords.length > 0) {
		guessedWords = (
			<div data-test='guessedWords' >
				<table>
					<tr>
						<th>Guessed Words</th>
						<th>Number of Matches</th>
					</tr>
					{tableData}
				</table>
			</div>
		);
	} else {
		guessedWords = (
			<div data-test='guessedInstructions' >
				<p>Please make a guess for the secret word!</p>
			</div>
		);
	}

	return (
		<div>
			{guessedWords}
		</div>
	);
}

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			word: PropTypes.string.isRequired,
			match: PropTypes.number.isRequired
		})
	).isRequired
}

export default GuessedWords;