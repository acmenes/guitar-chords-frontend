import React, { useState } from "react";
import MIDISounds from 'midi-sounds-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import "./GuitarChord.css";

function Listen() {
    
    function clickIcon() {
        alert("clicked")
    }

    return (
        <div className="listen-div">
            <FontAwesomeIcon onClick={clickIcon} icon={faVolumeUp} size='4x' />
            <h4>Listen to the chord!</h4>
        </div>
    )
}

export default Listen;