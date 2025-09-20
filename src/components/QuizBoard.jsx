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
  const { userAnswers } = Context;
  const { answerStatus } = Context;

  if (quizCompleted) {
    return <SummaryBoard
      questions={Quiz}
      userAns={userAnswers}
      ansStatus={answerStatus} />;
  }
  
  return <div id='quiz'>
    <div id="question">
      <QuestionTimer
        key={currentQuestionIndex}
        timeout={TIMER}
        onTimeOut={handleSkipAnswer} />
      <Question text={Quiz[currentQuestionIndex].text} />
      <Answers
        answers={Quiz[currentQuestionIndex].answers}
        selectedAns={handleSelectedAnswer} />
    </div>
  </div>;
}