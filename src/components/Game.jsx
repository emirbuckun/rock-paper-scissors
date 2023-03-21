import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ userChoice, score, setScore }) => {
  const [computer, setComputer] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newComputerPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setComputer(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newComputerPick();
  }, []);

  const Result = () => {
    if (userChoice === "rock" && computer === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (userChoice === "rock" && computer === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (userChoice === "scissors" && computer === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (userChoice === "scissors" && computer === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (userChoice === "paper" && computer === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (userChoice === "paper" && computer === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    Result();
  }, [computer]);

  return (
    <div>
      User Choice: {userChoice} <br />
      Computer Choice: {computer} <br />
      Result:
      {playerWin === "win" && <h2>You Win</h2>}
      {playerWin === "lose" && <h2>You Lose</h2>}
      {playerWin === "draw" && <h2>Draw</h2>}
      <Link to="/" onClick={() => setComputer()}>
        Play Again
      </Link>
    </div>
  );
};

export default Game;
