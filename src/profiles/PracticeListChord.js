import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import UserContext from "../userforms/UserContext";

import "./UserChords.css"

function PracticeListChord({ chord_fullname }) {
  const { markChordDone } = useContext(UserContext);

  function addToLearnedChords(evt) {
    markChordDone(chord_fullname);
  }

  return (
    <div className="practice-chord-div">
      <li>
        {chord_fullname} <span> </span>
        <FontAwesomeIcon className="user-chord" onClick={addToLearnedChords} icon={faCheck} />
      </li>
    </div>
  );
}

export default PracticeListChord;
