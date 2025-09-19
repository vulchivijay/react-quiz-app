import Question from "./Question";
import { Quiz } from '../util/questions.js';
import Answers from "./Answers";

export default function QuizBoard() {
  console.log(Quiz);
  return (
    <div id='quiz'>
      <div id='question-overview'>
        {Quiz && Quiz.map((question, index) => {
          return (<>
            <Question key={index} question={question.text} questionId={question.id} />
            <menu id='answers' className="answer">
              <Answers key={question.id} answers={question.answers} />
            </menu>
          </>)
        })}
      </div>
    </div>
  )
}