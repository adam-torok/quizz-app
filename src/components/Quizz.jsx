import { useEffect, useState, useCallback } from "react";
import quizzCompletedImage from "../assets/quiz-complete.png";
import QUESTIONS from '.././questions.js'
import ProgressBar from "./ProgressBar.jsx";
const TIMER = 15000;

export default function Quizz(){
	const [userAnswers, setUserAnswers] = useState([]);
	const [answerState, setAnswerState] = useState('');
	const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length -1
	const quizCompleted = activeQuestionIndex == QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setAnswerState('answered');
		setUserAnswers((prevAnswer) => {
			return [...prevAnswer, selectedAnswer]
		})

		let to = setTimeout(() => {
			if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
				setAnswerState('correct');
			}
			else{
				setAnswerState('wrong')
			}

			setTimeout(() => {
				setAnswerState('');
			}, 2000)
		}, 1000)

		clearTimeout(to)

	}, [activeQuestionIndex])

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

	if(quizCompleted){
		return <div id="summary">
			<img src={quizzCompletedImage} />
			<h2>Quiz is completed!</h2>
		</div>
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => (Math.random() - 0.5))

	return (
		<div id="quiz">
			<div id="question">
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ProgressBar
					key={activeQuestionIndex}
					onTimeout={() => {handleSkipAnswer(null)}}
				 	timeout={TIMER}
				 />
				<ul id="answers">
					{shuffledAnswers.map(answer => {
						let cssClasses = '';
						const isSelected = userAnswers[userAnswers.length - 1] === answer;

						if(answerState == 'answered' && isSelected){
							cssClasses = 'selected'
						}

						if(answer == 'correct' && isSelected){
							cssClasses += 'correct';
						}

						if(answer == 'wrong' && isSelected){
							cssClasses += 'wrong'
						}


						return <li className="answer" key={answer}>
							<button className={cssClasses} onClick={() => handleSelectAnswer(answer)}>{ answer }</button>
						</li>
					})}
				</ul>
			</div>
		</div>
	);
}
