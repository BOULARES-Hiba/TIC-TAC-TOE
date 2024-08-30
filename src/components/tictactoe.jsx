import { useState } from "react";
import Square from "./square";

const TicTacToe = () => {
  const [game, setGame] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function declareWinner(game) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (game[index] === "" && !winner && !draw) {
      const coperGame = [...game];
      coperGame[index] = turn ? "X" : "O";
      setGame(coperGame);
      const w = declareWinner(coperGame);
      if (w) {
        setWinner(w);
      } else if (coperGame.every((square) => square !== "")) {
        setDraw(true);
      } else {
        setTurn((prev) => !prev);
      }
    }
  }

  function resetGame() {
    setGame(Array(9).fill(""));
    setTurn(true);
    setWinner(null);
    setDraw(false);
  }

  return (
    <div className="max-w-[300px] mx-auto mt-36">
      <div className="flex">
        <Square value={game[0]} handleClick={() => handleClick(0)} />
        <Square value={game[1]} handleClick={() => handleClick(1)} />
        <Square value={game[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={game[3]} handleClick={() => handleClick(3)} />
        <Square value={game[4]} handleClick={() => handleClick(4)} />
        <Square value={game[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={game[6]} handleClick={() => handleClick(6)} />
        <Square value={game[7]} handleClick={() => handleClick(7)} />
        <Square value={game[8]} handleClick={() => handleClick(8)} />
      </div>
      {!winner && !draw && (
        <div className="text-2xl mt-2 text-center">
          It's {turn ? "X" : "O"}'s turn
        </div>
      )}
      {winner && (
        <div className="text-2xl mt-2 text-center">The winner is {winner}</div>
      )}
      {draw && <div className="text-2xl mt-2 text-center">It's a draw!</div>}
      {(winner || draw) && (
        <div className="flex justify-center">
          {" "}
          <button
            onClick={resetGame}
            className="mt-4 p-2  bg-pink-300 text-white rounded"
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
