import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';
import LogIn from "./userforms/LogIn";
import SignUp from "./userforms/SignUp";
import UserProfile from "./profiles/UserProfile";
import GuitarChord from './chords/GuitarChord.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

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
              <SignUp />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/profile">
              <UserProfile />
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
