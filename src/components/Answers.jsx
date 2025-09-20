import { useRef } from "react"

export default function Answers({ answers, selectedAns }) {
  // console.log('<Answers> component rendered', answers);
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



// import { useRef } from "react";
// import Button from "./Button";

// export default function Answers({ classes, answers, selectedAnswer, handleSelectedAnswer }) {
//   const shuffleAnswers = useRef()

//   if (!shuffleAnswers.current) {
//     shuffleAnswers.current = [...answers];
//     shuffleAnswers?.current.sort(() => Math.random() - 0.5);
//   }

//   return (<ul id='answers'>
//     {shuffleAnswers.current && shuffleAnswers.current.map(answer => {
//       return (<li key={answer} className='answer'>
//       <button
//         onClick={ () => handleSelectedAnswer(answer) }
//         className={classes} >{answer}</button>
//     </li>)
//     })}
//   </ul>)
// }
