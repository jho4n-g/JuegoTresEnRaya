import { useState } from 'react';

function Square({ value, onSquareClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="square"
      style={{
        padding: '30px 30px',
        border: '2px solid black',
        background: hover ? 'deepskyblue' : 'lightblue',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
export default Square;
