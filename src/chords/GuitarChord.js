import React, { useState, useContext } from "react";

import Chord from "@tombatossals/react-chords/lib/Chord";
import DropDownMenu from "../dropdown/DropDown";
import Listen from "./Listen";
import { Redirect } from "react-router-dom";

import "./GuitarChord.css";

import UserContext from "../userforms/UserContext";
import AddToMyChords from "./AddToMyChords";

function GuitarChord() {
  const { currentUser, chordList } = useContext(UserContext);
  const [chord, setChord] = useState({
    frets: [],
    fingers: [],
    barres: [],
    capo: false,
  });

  const [chordName, setChordName] = useState(null);

  const [instrument, setInstrument] = useState({
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"],
    },
  });
  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="display">
      <div className="dropdown-div">
        <DropDownMenu setChordName={setChordName} setChord={setChord} />
      </div>
      {chordName ? <h3>{chordName}</h3> : <h3>Choose a Chord</h3>}
      <div className="chord-div">
        <Chord chord={chord} instrument={instrument} />
        {chordName &&
        !chordList.some(
          (chord) =>
            chord.chord_fullname.toLowerCase() == chordName.toLowerCase()
        ) ? (
          <div className="buttons-div">
            {/* <Listen /> */}
            <AddToMyChords
              username={currentUser.username}
              chord={chord}
              chordName={chordName}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GuitarChord;
