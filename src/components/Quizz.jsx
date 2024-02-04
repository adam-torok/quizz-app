import { useEffect, useState } from "react";
import quizzCompletedImage from "../assets/quiz-complete.png";
import QUESTIONS from '.././questions.js'
import ProgressBar from "./ProgressBar.jsx";

export default function Quizz(){
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;
	const quizCompleted = activeQuestionIndex == QUESTIONS.length;

	useEffect(() => {
		setTimeout(() => {
			console.log('hey')
		}, 15000)
	}, [])

	function handleSelectAnswer(answer){
		setUserAnswers((prevState) => {
			return [...prevState, answer]
		})
	}

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
				<ProgressBar />
				<ul id="answers">
					{shuffledAnswers.map(answer => {
						return <li className="answer" key={answer}>
							<button onClick={() => handleSelectAnswer(answer)}>{ answer }</button>
						</li>
					})}
				</ul>
			</div>
		</div>
	);
}
