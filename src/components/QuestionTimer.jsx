import { useEffect, useState } from "react"

export default function QuestionTimer({ timeout, onTimeOut }) {
  // console.log('<QuestionTimer> rendered');
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 100);
    }, 100);
    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <progress id='question-time' value={remainingTime} max={timeout} />
  )
}


// import { useEffect, useState } from "react";

// export default function QuestionTimer({ timeout, onTimeOut }) {
//   const [remainingTime, setRemainingTime] = useState(timeout);
  
//   useEffect(() => {
//     const timer = setTimeout(onTimeOut, timeout);
//     return () => clearTimeout(timer);
//   }, [timeout, onTimeOut]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRemainingTime(prevTime => prevTime - 100);
//     }, 100);
//     return () => clearInterval(interval);
//   }, [remainingTime]); 

//   return (
//     <progress id='question-time' value={remainingTime} max={timeout} />
//   )
// }