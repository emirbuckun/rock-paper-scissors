import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Play from "./components/Play/Play";
import Game from "./components/Game/Game";
import Footer from "./components/Footer/Footer";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("localScore")) {
      const storedScore = JSON.parse(localStorage.getItem("localScore"));
      setScore(storedScore);
    }
  }, []);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Play setUserChoice={setUserChoice} />}
          />
          <Route
            path="/game"
            element={
              <Game userChoice={userChoice} score={score} setScore={setScore} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
