import QuizCompleted from './../assets/quiz-complete.png'

export default function SummaryBoard() {
  return (
    <div id='summary'>
      <img src={QuizCompleted} alt='Quiz Completed' />
      <h2>Quiz Complete</h2>
      {/* <ol>
        <li>li 1</li>
        <li>li 2</li>
      </ol>
      <h3></h3>
      <div className='question'>Questions</div>
      <div className='user-answer correct'>Answers</div>
      <div className='user-answer wrong'>Answers</div>
      <div className='user-answer skipped'>Answers</div>
      <div id='summary-stats'>
        <p></p>
        <div className='number'>Number</div>
        <div className='text'>Text</div>
      </div> */}
    </div>
  )
}