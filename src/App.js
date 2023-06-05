import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import UnityGame from "./components/pages/UnityGame";
import Collectibles from "./components/pages/Collectibles";

function App() {
  return (
    <>
      {/* Contains our pages/paths */}
      <Router>
        <Navbar />
        <Routes>
          {/* path="/" is to send Home */}
          <Route path="/" exact Component={Home}></Route>
          <Route path="/UnityGame" exact Component={UnityGame} />
          <Route path="/Collectibles" exact Component={Collectibles} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
