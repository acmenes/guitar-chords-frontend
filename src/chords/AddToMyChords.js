import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

import UserContext from "../userforms/UserContext";

import GuitarApi from "../Api";

function AddToMyChords ({ username, chord, chordName }) {
    /// write a function that adds the chord to a player's database of learned chords here
    const { hasAddedChord, addChordToUserList } = useContext(UserContext)
    const [added, setAdded] = useState();

    React.useEffect(function updateChordStatus(){
        console.debug("useEffect add chord to list", "chord=", chord, "chordname=", chordName, username)

        setAdded(hasAddedChord(chordName));
    }, [chordName, hasAddedChord]);

   async function handleAddChord() {
        if (hasAddedChord(chordName)) return;
        addChordToUserList(chordName);
        console.debug('****************')
        console.debug(`${username} added ${chordName} to their list`)
        console.debug('****************')
        setAdded(true);
    }

    return (
        <div className="button-div">
            <Form>
                <Button onCLick={handleAddChord}>Add to my practice list 
                <FontAwesomeIcon icon={faList}/></Button>
            </Form>
            <button onClick={handleAddChord}>Temp Add Button</button>
        </div>
    )
};

export default AddToMyChords;