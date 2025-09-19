import { useState } from 'react';
import Quiz from './util/questions';
import Header from "./components/Header";
import QuizBoard from "./components/QuizBoard";
import Summary from "./components/Summary";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    // console.log('handle start quiz!');
    setStartQuiz(true);
  }

  return (
    <>
      <Header startQuizBtn={handleStartQuiz} isBtnVisible={startQuiz} />
      <QuizBoard />
    </>
  )
}

export default App;
