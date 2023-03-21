import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

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
    // <>
    //   <Header score={score} />
    //   <Play setUserChoice={setUserChoice} />
    //   <Game userChoice={userChoice} score={score} setScore={setScore} />
    //   <Footer />
    // </>
  );
}

export default App;
