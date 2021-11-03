import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import GuitarApi from "../Api";

function PracticeListChord({ chord_fullname }) {
    
    function addToLearnedChords() {
        console.debug(`${chord_fullname} added to learned chords`)
    }
    
    return (
        <div className="practice-list-chord">
            <li>{chord_fullname} <FontAwesomeIcon onClick={addToLearnedChords} icon={faCheck}/></li>
        </div>
    )
}

export default PracticeListChord;