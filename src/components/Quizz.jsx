import { useEffect, useState, useCallback } from "react";
import quizzCompletedImage from "../assets/quiz-complete.png";
import QUESTIONS from '.././questions.js'
import Questions from "./Questions.jsx";
const TIMER = 15000;

export default function Quizz(){
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;
	const quizCompleted = activeQuestionIndex == QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setUserAnswers((prevAnswer) => {
			return [...prevAnswer, selectedAnswer]
		})
	}, [])

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

	if(quizCompleted){
		return <div id="summary">
			<img src={quizzCompletedImage} />
			<h2>Quiz is completed!</h2>
		</div>
	}

	return (
	  <div id="quiz">
	    <Questions
	      key={activeQuestionIndex}
		  index={activeQuestionIndex}
		  timer={TIMER}
	      onSelectAnswer={handleSelectAnswer}
	      onSkipAnswer={handleSkipAnswer}
	    />
	  </div>
	);

}
