
import './Name.css'
import { useState } from "react";
function getRandom(max) {
  return Math.floor(Math.random() * max);
}
function getMessage(guess, rnd) {
  const guessNo = Number(guess);
  if (guessNo < rnd) 
  {alert('you guessed a smaller number')
};
  if (guessNo > rnd)
  {
    alert('you guessed a bigger number')
};
  if (guessNo === rnd) return "congratulations you guessed the right number in attempts";
}
function Game() {
  const [guess, setGuess] = useState("");
  const [rnd, setRnd] = useState(getRandom(10));
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);
  const checkGuess = () => {
    setMsg(getMessage(guess, rnd));
    setCount((count) => count + 1);
  };
  const start = () => {
    setRnd(getRandom(10));
    setCount(0);
    setMsg("");
  };
  return (
    
    <div className='ss'>
   
    <form>
    <div  className='gg'>
      <input  className='text'
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
     {msg !== "Great!" ? (
        <button className='btn' type="button" onClick={checkGuess}>
         Match Number
        </button>
      ) : (
        <button className='btn' type="button" onClick={start}>
          Start again!
        </button>
      )}
     
      </div>
      <div className='me'>{msg}</div>
      <div  className='me'>No of guesses {count}</div>
    </form>
    </div>
  );
}
export default Game;