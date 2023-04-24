import { useState } from "react";

const GuessInput = () => {
	const [word, setWord] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(word);
		setWord("");
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				minLength={5}
				maxLength={5}
				required
				type="text"
				value={word}
				onChange={e => setWord(e.target.value.toUpperCase())}
			/>
		</form>
	);
}

export default GuessInput;