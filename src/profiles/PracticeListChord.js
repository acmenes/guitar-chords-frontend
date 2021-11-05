import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import UserContext from "../userforms/UserContext";

import GuitarApi from "../Api";

function PracticeListChord({ chord_fullname, done }) {
    
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [chordIsDone, setChordIsDone] = useState(false)

    async function addToLearnedChords(evt) {
        console.debug(`${chord_fullname} added to learned chords`)
        console.debug(`${currentUser[0].username}`)
        let updatedChord = await GuitarApi.editUserChordList(currentUser[0].username, chord_fullname)
        console.debug(`${currentUser} added ${chord_fullname} to their done list`)
        setChordIsDone(updatedChord)
        console.debug(`${done}`)
    }
    
    return (
        <div className="practice-list-chord">
            <li>{chord_fullname} {done} <FontAwesomeIcon onClick={addToLearnedChords} icon={faCheck}/></li>
        </div>
    )
}

export default PracticeListChord;