import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
//   const timerRef = useRef("");
// function start() {
  useEffect(() => {
    let id = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      //   setSeconds((preVal) => {
      //     if ((seconds === 59)) {
      //       clearInterval(id);
      //       return 0;
      //     }
      //     return preVal + 1;
      //   });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });
// }

  return (
    <>
      <h1>Timer</h1>
      <h2>
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </h2>
      <span>
        Start Time: <input type="number" />
      </span>
          End Time: <input type="number" />
          <button onClick={() => { start() }}>Start</button>
    </>
  );
};
