import { useState, useEffect } from "react";



export default function Timer() {
    const [minutes, setMinutes] = useState<number>(3);
    const [seconds, setSeconds] = useState<number>(0);
  
    useEffect(() => {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }, [minutes, seconds]);
  
    return (
      <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
  