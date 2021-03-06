import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export function TicTacToe() {
  return (
    <div>
      <h1>TicTacToe Game</h1>
      <Board />
    </div>
  );
}

function Board() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXTurn, setIsXTurn] = useState(true);

  const { width, height } = useWindowSize();

  // function to decide winner
  const decideWinner = (board) => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        (board[a] != null) &
        (board[a] == board[b]) &
        (board[b] == board[c])
      ) {
        console.log("Winner", board[a]);
        return board[a];
      }
    }
  };

  const winner = decideWinner(board);

  const handleClick = (index) => {
    if ((winner == null) & (board[index] == null)) {
      console.log(index);
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      // changing turn
      setIsXTurn(!isXTurn);
    }
  };
  return (
    <div>
      {/* <Confetti width={width} height={height} /> */}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
        <h2>Winner is: {winner}</h2>
      </div>
      <Button
        onClick={() => {
          setBoard([null, null, null, null, null, null, null, null, null]);
          setIsXTurn(true);
        }}
        variant="contained"
      >
        Restart
      </Button>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  // const [val, setVal] = useState("");

  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div
      style={styles}
      className="game-box"
      onClick={onPlayerClick}
      // onClick={() => setVal(val == "X" ? "O" : "X")}
    >
      {val}
    </div>
  );
}
