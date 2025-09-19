import { useEffect, useState } from 'react';
import Quiz from '../util/questions';
// import ProgressBar from './ProgressBar';

export default function QuizBoard() {
  // console.log('<quiz board> component!');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const shuffleAnswers = [...Quiz[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.round() - 0.5);

  const handleSelectedAnswer = (selectedAnswer) => {
    setUserAnswers(prevAnswer => {
      return [...prevAnswer, selectedAnswer];
    })
  }

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{Quiz[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffleAnswers.map(answer => <li key={answer} className='answer'>
            <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
          </li>)}
        </ul>
      </div>
    </div>
  )
}