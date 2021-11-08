import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Home from "./Home";
import UserContext from "./userforms/UserContext";
import Progressions from "./chords/Progressions";
import LogIn from "./userforms/LogIn";
import LogOut from "./userforms/LogOut";
import SignUp from "./userforms/SignUp";
import UserProfile from "./profiles/UserProfile";
import GuitarChord from "./chords/GuitarChord.js";
import useLocalStorage from "./hooks/useLocalStorage";
import LoadingSpinner from "./common/LoadingSpinner";
import GuitarApi from "./Api";

import jwt from "jsonwebtoken";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "guitar-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [chordList, setChordList] = useState([]);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    "App",
    "infoLoaded=",
    infoLoaded,
    "currentUser=",
    currentUser,
    "token=",
    token
  );

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the Api class so it can use it to call the API.
            GuitarApi.token = token;
            let currentUser = await GuitarApi.getCurrentUser(username);
            setCurrentUser(currentUser);
            let userChords = await GuitarApi.getUserChords(username);
            setChordList([...userChords]);
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
    },
    [token]
  );

  /** logs out a user */
  function logout() {
    setToken(null);
    setCurrentUser(null);
    setChordList([]);
  }

  if (!infoLoaded) {
    return <LoadingSpinner />;
  }

  /** logs in a user */
  async function login(loginData) {
    try {
      let token = await GuitarApi.login(loginData);
      console.log(token);
      setToken(token);
      GuitarApi.token = token;
      setCurrentUser(loginData.username);
      let userChords = await GuitarApi.getUserChords(loginData.username);
      setChordList([...userChords]);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  /** signs up a new user */
  async function signup(signupData) {
    try {
      let token = await GuitarApi.signup(signupData);
      setToken(token);
      GuitarApi.token = token;
      setCurrentUser(signupData.username);
      let userChords = await GuitarApi.getUserChords(signup.username);
      setChordList([...userChords]);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  function hasAddedChord(chord_fullname) {
    return chordList.some((chord) => chord.chord_fullname == chord_fullname);
  }

  function addChordToUserList(chord_fullname) {
    if (hasAddedChord(chord_fullname)) return;
    console.log(currentUser);
    GuitarApi.addChordToUserList(currentUser.username, chord_fullname);
    setChordList([...chordList, { chord_fullname, done: false }]);
  }

  function removeChordFromUserList(chord_fullname) {
    if (!hasAddedChord(chord_fullname)) return;
    GuitarApi.removeChordFromUserList(currentUser.username, chord_fullname);
    setChordList(
      chordList.filter((chord) => {
        return chord.chord_fullname != chord_fullname;
      })
    );
  }
  function markChordDone(chord_fullname) {
    if (!hasAddedChord(chord_fullname)) return;
    GuitarApi.markChordDone(currentUser.username, chord_fullname);
    const newList = chordList.filter((chord) => {
      return chord.chord_fullname != chord_fullname;
    });
    setChordList([...newList, { chord_fullname, done: true }]);
  }

  function markChordNotDone(chord_fullname) {
    if (!hasAddedChord(chord_fullname)) return;
    GuitarApi.markChordNotDone(currentUser.username, chord_fullname);
    const newList = chordList.filter((chord) => {
      return chord.chord_fullname != chord_fullname;
    });
    setChordList([...newList, { chord_fullname, done: false }]);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            currentUser,
            chordList,
            setCurrentUser,
            hasAddedChord,
            addChordToUserList,
            removeChordFromUserList,
            markChordDone,
            markChordNotDone,
          }}
        >
          <NavBar currentUser={currentUser} />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/progressions">
                <Progressions />
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
              <Route exact path="/logout">
                <LogOut logout={logout} />
              </Route>
            </Switch>
          </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
