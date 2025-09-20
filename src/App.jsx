import QuizContextProvider from './context/QuizContext';
import Header from "./components/Header";
import QuizBoard from './components/QuizBoard';

function App() {
  return (
    <QuizContextProvider>
      <Header />
      <QuizBoard />
    </QuizContextProvider>
  )
}

export default App;
