import { createContext, useReducer } from "react";
import Quiz from '../util/questions';

export const QuizContext = createContext({
  currentQuestionIndex: 0,
  userAnswers: [],
  answerStatus: null,
  handleSelectedAnswer: () => {},
  handleSkipAnswer: () => {},
  quizCompleted: false,
  quizData: Quiz,
});

function QuizReducer(state, action) {
  if (action.type === 'SELECTED_ANSWER') {
    const updatedAnswers = [...state.userAnswers];
    updatedAnswers.push(action.payload);
    return {
      ...state,
      userAnswers: updatedAnswers,
      answerStatus: action.payload === Quiz[state.currentQuestionIndex].answers[0] ? 'correct' : action.payload === null ? 'skipped' : 'wrong',
      currentQuestionIndex: state.currentQuestionIndex + 1,
      quizCompleted: updatedAnswers.length === Quiz.length,
    };
  }
  if (action.type === 'SKIPPED_ANSWER') {
    const updatedAnswers = [...state.userAnswers];
    updatedAnswers.push(action.payload);
    return {
      ...state,
      userAnswers: updatedAnswers,
      answerStatus: 'skipped',
      currentQuestionIndex: state.currentQuestionIndex + 1,
      quizCompleted: updatedAnswers.length === Quiz.length,
    };
  }
  return state;
}

export default function QuizContextProvider({ children }) {
  const [questionState, questionDispatch] = useReducer(QuizReducer, {
    currentQuestionIndex: 0,
    userAnswers: [],
    answerStatus: null,
    quizCompleted: false,
  });

  function handleSelectedAnswer(answer) {
    questionDispatch({
      type: 'SELECTED_ANSWER',
      payload: answer,
    });
  };

  function handleSkipAnswer() {
    questionDispatch({
      type: 'SKIPPED_ANSWER',
      payload: null,
    });
  };

  const ctxValue = {
    currentQuestionIndex: questionState.currentQuestionIndex,
    userAnswers: questionState.userAnswers,
    answerStatus: questionState.answerStatus,
    handleSelectedAnswer: handleSelectedAnswer,
    handleSkipAnswer: handleSkipAnswer,
    quizCompleted: questionState.quizCompleted,
    quizData: Quiz,
  }

  return <QuizContext.Provider value={ctxValue}>
    {children}
  </QuizContext.Provider>;  
}