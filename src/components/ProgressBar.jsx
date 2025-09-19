import { useState, useEffect } from 'react';

export default function ProgressBar({ timer }) {
  // console.log('progress bar');
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log('use Effect!');
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return timer;
        }
        return prevTime - 10
      });
    }, 10);

    return () => clearInterval(interval);
  }, [timer]);

  return <progress value={remainingTime} max={timer} />;
}