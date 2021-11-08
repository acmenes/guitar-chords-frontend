import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";

import UserContext from "../userforms/UserContext";

import GuitarApi from "../Api";

function AddToMyChords({ username, chord, chordName }) {
  /// write a function that adds the chord to a player's database of learned chords here
  const { hasAddedChord, addChordToUserList, currentUser, chordList } =
    useContext(UserContext);
  const [added, setAdded] = useState(false);

  React.useEffect(
    function updateChordStatus() {
      console.debug(
        "useEffect add chord to list",
        "chord=",
        chord,
        "chordname=",
        chordName,
        chordName.toLowerCase(),
        username
      );

      setAdded(hasAddedChord(chordName.toLowerCase()));
    },
    [chordName, hasAddedChord]
  );

  async function handleAddChord() {
    if (hasAddedChord(chordName.toLowerCase())) return;
    if (!chordName) return;
    addChordToUserList(chordName.toLowerCase());
    setAdded(true);
  }
  if (!currentUser) {
    return <Redirect to="/" />;
  }
  if (added) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className="button-div">
      <Form>
        {/* <Button onCLick={handleAddChord}>Add to my practice list 
                <FontAwesomeIcon icon={faList}/></Button> */}
      </Form>
      <button onClick={handleAddChord}>
        Add to my practice list <FontAwesomeIcon icon={faList} />
      </button>
    </div>
  );
}

export default AddToMyChords;
