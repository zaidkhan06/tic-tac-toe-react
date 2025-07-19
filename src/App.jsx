import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";

    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-6 font-bold">Tic-Tac-Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      <p className="mt-4 text-xl">{status}</p>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default App;
