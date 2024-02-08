import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswersRef = useRef();

  if (!shuffledAnswersRef.current) {
    shuffledAnswersRef.current = [...answers];
    shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswersRef.current.map((answer) => {
        let cssClasses = '';
        const isSelected = selectedAnswer === answer;

        if (answerState === 'answered' && isSelected) {
          cssClasses = 'selected';
        }

        if (answer === 'correct' && isSelected) {
          cssClasses += 'correct';
        }

        if (answer === 'wrong' && isSelected) {
          cssClasses += 'wrong';
        }

        return (
          <li className="answer" key={answer}>
            <button className={cssClasses} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
