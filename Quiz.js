import React, { useState } from 'react';
import { Data } from './Data';

const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setShowScore(true);
    }

    // Reset the radio buttons
    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((curVal) => {
      curVal.checked = false;
    });
  };

  const handleInput = (event) => {
    let chooseVal = event.target.value;
    if (chooseVal === data[index].ans) {
      setScore(score + 1);
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='container'>
      <div className='box'>
        {!showScore ? (
          <>
            <div>
              <h1>Q: {data[index].q}</h1>
            </div>
            <div className='option'>
              <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].a} />
              <p>{data[index].a}</p>
            </div>
            <div className='option'>
              <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].b} />
              <p>{data[index].b}</p>
            </div>
            <div className='option'>
              <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].c} />
              <p>{data[index].c}</p>
            </div>
            <div className='option'>
              <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].d} />
              <p>{data[index].d}</p>
            </div>
            <div className='btns'>
              <button id="next" className="btn" onClick={next}>Next</button>
            </div>
          </>
        ) : (
          <>
            <div className='score'>
                <h1>Congratulations! </h1>
              <h2>Your Score: {score}/10</h2>
            </div>
            <div className='btns'>
              <button id="next" className="btn reset" onClick={resetQuiz}>Play Again</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;