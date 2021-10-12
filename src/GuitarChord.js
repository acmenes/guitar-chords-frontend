import React from "react";

import Chord from '@tombatossals/react-chords/lib/Chord'
import DropDown from "./DropDown";

import "./GuitarChord.css"
import AddToMyChords from "./AddToMyChords";

/// using sample data from the react-chords readme file

///need to use useState to change this
const chord = {
    frets: [0, 0, 0, 0, 0, 0],
    fingers: [0, 0, 0, 0, 0, 0],
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
        <div className="display">
          <div className="dropdown-div">
            <DropDown />
          </div>
          <h3>The Chord</h3>
          <div className="chord-div">
              <Chord chord={chord} instrument={instrument}/>
              <div className="buttons-div">
                  <AddToMyChords />
              </div>
          </div>
        </div>
    )
  };

  export default GuitarChord;