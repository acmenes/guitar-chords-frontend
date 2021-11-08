import React, { useState, useContext, useEffect } from "react";

import UserContext from "../userforms/UserContext";
import PracticeList from "./PracticeList";
import MasterList from "./MasterList";
import { Redirect } from "react-router-dom";

import "./UserProfile.css";

function UserProfile() {
  const { currentUser, chordList } = useContext(UserContext);
  const { hasAddedChord, addChordToUserList } = useContext(UserContext);
  const [practiceChords, setPracticeChords] = useState([]);
  const [masteredChords, setMasteredChords] = useState([]);

  useEffect(
    function getchordListFromApi() {
      console.log(currentUser);

      getUserPracticeChords();
    },
    [chordList]
  );

  console.log(currentUser);

  async function getUserPracticeChords() {
    let practiceChordsArray = chordList.filter((chord) => !chord.done);
    let masteredChordsArray = chordList.filter((chord) => chord.done);
    console.log(chordList);
    if (chordList.length === 0)
      setPracticeChords("Start adding some chords to your list!");

    setPracticeChords(practiceChordsArray);
    setMasteredChords(masteredChordsArray);

    console.debug(`practice chords: ${practiceChords}`);
    console.debug(practiceChords.map((practiceChord) => practiceChord));
  }

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="user-profile">
      <h1>Profile for {currentUser.username} </h1>
      <PracticeList currentUser={currentUser} practiceChords={practiceChords} />
      <MasterList currentUser={currentUser} masteredChords={masteredChords} />
    </div>
  );
}

export default UserProfile;
