import { useState } from "react";

function App() {
  let today = new Date();
  let newDate = new Date(today);

  function nextDate(val) {
    newDate.setDate(newDate.getDate() + val);
    setDate((d) => newDate);
  }
  function prevDate() {
    setDate(() => {
      newDate.setDate(date.getDate() - step);
      return newDate;
    });
  }
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(today);
  function resetVals() {
    setCount(0);
    setStep(1);
    setDate(today);
  }
  function handlePrevious(e) {
    if (count > 0) {
      setCount(count - step);
      prevDate();
    }
  }

  function handleNext(e) {
    setCount(count + step);
    nextDate(count + step);
  }
  return (
    <div className="box">
      <div className="slider">
        <input
          type="range"
          min="1"
          max="7"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>{step}</span>
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>-</button>
        <input value={count}></input>
        <button onClick={handleNext}>+</button>
      </div>
      <h3>
        {count === 0
          ? `Today is ${today.toDateString()}`
          : `${count} ${
              count === 1 ? "day" : "days"
            } from today is ${date.toDateString()} `}
      </h3>
      {count !== 0 || step !== 1 ? (
        <div className="reset">
          <button onClick={resetVals}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
