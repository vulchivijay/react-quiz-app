import { useRef } from "react"

export default function Answers({ answers, selectedAns }) {
  const shuffleAnswers = useRef();
  shuffleAnswers.current = [...answers];
  shuffleAnswers?.current.sort(() => Math.random() - 0.5);

  return (<ul id='answers'>
    {shuffleAnswers.current && shuffleAnswers.current.map((answer, index) => {
      return (<li key={index} className='answer'>
      <button onClick={() => selectedAns(answer)}>{ answer }</button>
    </li>)
    })}
  </ul>);
}