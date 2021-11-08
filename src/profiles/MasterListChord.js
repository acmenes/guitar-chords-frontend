import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import UserContext from "../userforms/UserContext";

function MasterListChord({ chord_fullname }) {
  const { markChordNotDone } = useContext(UserContext);

  function removeFromLearned(evt) {
    markChordNotDone(chord_fullname);
  }
  return (
    <div className="masterlist-list-chord">
      <li>
        {chord_fullname}{" "}
        <FontAwesomeIcon onClick={removeFromLearned} icon={faTimes} />
      </li>
    </div>
  );
}

export default MasterListChord;
