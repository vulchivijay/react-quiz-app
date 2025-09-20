import QuizCompleted from './../assets/quiz-complete.png'

export default function SummaryBoard( { questions, userAns, ansStatus } ) {

  const skippedCount = ansStatus.filter(status => status === 'skipped');
  const correctCount = ansStatus.filter(status => status === 'correct');
  const wrongCount = ansStatus.filter(status => status === 'wrong');
  const totalQuestions = questions.length;
  const skippedPercent = ((skippedCount.length / totalQuestions) * 100).toFixed(0);
  const correctPercent = ((correctCount.length / totalQuestions) * 100).toFixed(0);
  const wrongPercent = ((wrongCount.length / totalQuestions) * 100).toFixed(0);

  return (
    <div id='summary'>
      <img src={QuizCompleted} alt='Quiz Completed' />
      <h2>Quiz Complete</h2>
      <div id='summary-stats'>
        <div>
          <p className='number'>{skippedPercent} %</p>
          <p className='text'>Skipped Questions</p>
        </div>
        <div>
          <p className='number'>{correctPercent} %</p>
          <p className='text'>Answered Correctly.</p>
        </div>
        <div>
          <p className='number'>{wrongPercent} %</p>
          <p className='text'>Answered Incorrectly.</p>
        </div>
      </div>
      <ol>
        { questions && questions.map((question, index) => {
          const cssClass = 'user-answer ' + (ansStatus[index]);
          return <li key={index}>
            <h3>{index + 1}</h3>
            <p className='question'>{question.text}</p>
            <p className={cssClass}>{userAns[index] ? userAns[index] : 'Skipped'} </p>
          </li>
        })}
      </ol>
    </div>
  )
}