import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "./GuessInput";
import ListOfGuess from "./ListOfGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
	const [guesses, setGuesses] = useState([]);

	return (
		<>
			<ListOfGuess guesses={guesses}/>
			<GuessInput guesses={guesses} setGuesses={setGuesses}/>
		</>
	);
}

export default Game;
