import React from "react";

import Chord from '@tombatossals/react-chords/lib/Chord'

import "./GuitarChord.css"
import AddToMyChords from "./AddToMyChords";

/// using sample data from the react-chords readme file
const chord = {
    frets: [-1, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    barres: [],
    capo: false,
  }
  
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
        standard: ['E', 'A', 'D', 'G', 'B', 'E']
    }
  }

  function GuitarChord () {
    return (
        <div className="chord-div">
            <Chord chord={chord} instrument={instrument}/>
            <div className="buttons-div">
                <AddToMyChords />
            </div>
        </div>
    )
  };

  export default GuitarChord;