import { useState, useEffect } from 'react';

export default function ProgressBar({ timer }) {
  // console.log('progress bar');
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime =>  prevTime - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [timer]);

  return <progress value={remainingTime} max={timer} />;
}