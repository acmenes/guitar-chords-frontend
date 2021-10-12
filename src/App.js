import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';

import './App.css';

import GuitarChord from './GuitarChord.js'

function App() {
  const [guitarChords, setGuitarChords] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/chords">
              <GuitarChord />
            </Route>
            <Route exact path="/signup">

            </Route>
            <Route exact path="/login">

            </Route>
            <Route exact path="/profile">

            </Route>
          </Switch>
        </main>
      </BrowserRouter>
      {/* <Home />
      <GuitarChord /> */}
    </div>
  );
}

export default App;
