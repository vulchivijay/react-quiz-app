import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

import Question from "./Question";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import SummaryBoard from "./Summary";

const TIMER = 1000 * 60; // 60 seconds

export default function QuizBoard() {
  const Context = useContext(QuizContext);
  const { quizData: Quiz } = Context;
  const { currentQuestionIndex: currentQuestionIndex } = Context;
  const { handleSelectedAnswer } = Context;
  const { handleSkipAnswer } = Context;
  const { quizCompleted } = Context;

  if (quizCompleted) {
    return <SummaryBoard />;
  }
  
  return <div id='quiz'>
    <div id="question">
      <QuestionTimer key={currentQuestionIndex} timeout={TIMER} onTimeOut={handleSkipAnswer} />
      <Question text={Quiz[currentQuestionIndex].text} />
      <Answers answers={Quiz[currentQuestionIndex].answers} selectedAns={handleSelectedAnswer} />
    </div>
  </div>;
}


// import { useCallback, useState } from 'react';
// import QuestionTimer from './QuestionTimer';
// import Question from './Question';
// import Summary from './Summary';
// const TIMER = 30000;

// export default function QuizBoard({ Quiz }) {
//   // console.log('<quiz board> component!');\
//   const [answerStatus, setAnswerStatus] = useState(null);
//   const [userAnswers, setUserAnswers] = useState([]);
  
//   const activeQuestionIndex =
//     answerStatus === null ? userAnswers.length : userAnswers.length - 1;
//   const quizCompleted = userAnswers.length === Quiz.length;
  
//   const handleSelectedAnswer = useCallback(selectedAnswer => {
//     // setAnswerStatus('answered');
//     setUserAnswers(prevAnswer => {
//       return [...prevAnswer, selectedAnswer];
//     });
//     setTimeout(() => {
//       setAnswerStatus(selectedAnswer === Quiz[activeQuestionIndex].answers[0] ? 'correct' : selectedAnswer === null ? 'skipped' : 'wrong');
//       setTimeout(() => { setAnswerStatus(null)}, 2000);
//     }, 1000);
//   }, [activeQuestionIndex]);

//   const handleSkipAnswer = useCallback(() => {
//     handleSelectedAnswer(null)
//   }, [handleSelectedAnswer]);
  
//   return (
//     <>
//       { !quizCompleted &&
//         <div id='quiz'>
//           <div id='question'>
//             <QuestionTimer
//               key={activeQuestionIndex}
//               timer={TIMER}
//               onTimeOut={handleSkipAnswer} />
//             <Question
//               key={activeQuestionIndex}
//               classes={answerStatus}
//               text={Quiz[activeQuestionIndex].text}
//               answers={Quiz[activeQuestionIndex].answers}
//               selectedAnswer={userAnswers[userAnswers.length - 1]}
//               handleSelectedAnswer={handleSelectedAnswer} />
//           </div>
//         </div> }
//       { quizCompleted && <Summary Quiz={Quiz} userAnswers={userAnswers} /> }
//     </>
//   )
// }