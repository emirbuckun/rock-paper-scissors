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
    <div className="game">
      <div className="game-user">
        <span className="game-text"> You Picked</span>
        {userChoice == "paper" && (
          <div className="game-icon game-icon-paper"></div>
        )}
        {userChoice == "rock" && (
          <div className="game-icon game-icon-rock"></div>
        )}
        {userChoice == "scissors" && (
          <div className="game-icon game-icon-scissors"></div>
        )}
      </div>

      <div className="game-play">
        <span className="game-play-text">
          {playerWin == "win" && "You Win"}
          {playerWin == "lose" && "You Lose"}
          {playerWin == "draw" && "Draw"}
        </span>
        <Link to="/" className="play-again" onClick={() => setComputer()}>
          Play Again
        </Link>
      </div>

      <div className="game-computer">
        <span className="game-text">Computer Picked</span>
        {computer == "paper" && (
          <div className="game-icon game-icon-paper"></div>
        )}
        {computer == "rock" && <div className="game-icon game-icon-rock"></div>}
        {computer == "scissors" && (
          <div className="game-icon game-icon-scissors"></div>
        )}
      </div>
    </div>
  );
};

export default Game;

// User Choice: {userChoice} <br />
//       Computer Choice: {computer} <br />
//       Result:
//       {playerWin === "win" && <h2>You Win</h2>}
//       {playerWin === "lose" && <h2>You Lose</h2>}
//       {playerWin === "draw" && <h2>Draw</h2>}
//       <Link to="/" onClick={() => setComputer()}>
//         Play Again
//       </Link>
