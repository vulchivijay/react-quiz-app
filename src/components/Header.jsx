import Logo from './../assets/quiz-logo.png'
import Button from './Button';

export default function Header({ startQuizBtn, isBtnVisible }) {

  return (
    <header>
      <img src={Logo} alt='logo' />
      <h1>ReactQuiz</h1>
      {/* {!isBtnVisible && <Button buttonAction={startQuizBtn}>Start Quiz</Button>} */}
    </header>
  );
}