import ProgressBar from "./ProgressBar"
import Answers from "./Answers"
import { useState } from "react"
import QUESTIONS from '../questions'

export default function Questions({index, onSelectAnswer, selectedAnswer, handleSkipAnswer, timer}){
	const [answer, setAnswer] = useState({
		selectedAnswer: '',
		isCorrect: null
	});

	function handleSelectAnswer(answer){
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null
		})
	}

	setTimeout(() => {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: QUESTIONS[index].answers[0] === answer
		})

		setTimeout(() => {
			onSelectAnswer(answer)
		}, 2000)
	}, 1000);



	let answerState = '';

	if(answer.selectedAnswer){
		answerState = answer.isCorrect ? 'correct' : 'wrong'
	}

	return(
		<div id="question">
			<h2>{QUESTIONS[index].text}</h2>
			<ProgressBar
				onTimeout={() => {handleSkipAnswer(null)}}
			 	timeout={timer}
			 />
			<Answers
				answerState={answerState}
			 	selectedAnswer={answer.selectedAnswer}
				onSelect={handleSelectAnswer}
				answers={QUESTIONS[index].answers} />
		</div>
	)
}
