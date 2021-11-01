import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Home from './Home';
import UserContext from "./userforms/UserContext";
import LogIn from "./userforms/LogIn";
import SignUp from "./userforms/SignUp";
import UserProfile from "./profiles/UserProfile";
import GuitarChord from './chords/GuitarChord.js'
import useLocalStorage from "./hooks/useLocalStorage";
import GuitarApi from "./Api";

import jwt from "jsonwebtoken";

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "guitar-token";

function App({ login, signup }) {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    "App",
    "infoLoaded=", infoLoaded,
    "currentUser=", currentUser,
    "token=", token,
);

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);
  
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          GuitarApi.token = token;
          let currentUser = await GuitarApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
  
    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  async function login(loginData) {
    try {
      let token = await GuitarApi.login(loginData);
      setToken(token);
      alert("logged in")
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  };

  async function signup(signupData) {
    try {
      let token = await GuitarApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
              <SignUp signup={signup} />
            </Route>
            <Route exact path="/login">
              <LogIn login={login} />
            </Route>
            <Route exact path="/profile">
              <UserProfile />
            </Route>
          </Switch>
        </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
