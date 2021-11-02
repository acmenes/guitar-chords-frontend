import React, { useState } from "react";

import Chord from '@tombatossals/react-chords/lib/Chord'
import DropDownMenu from "../dropdown/DropDown";
import Listen from "./Listen";

import "./GuitarChord.css";
import AddToMyChords from "./AddToMyChords";

/// using sample data from the react-chords readme file

///need to use useState to change this
// const chord = {
//     frets: [0, 0, 0, 0, 0, 0],
//     fingers: [0, 0, 0, 0, 0, 0],
//     barres: [],
//     capo: false,
//   }
  
  // const instrument = {
  //   strings: 6,
  //   fretsOnChord: 4,
  //   name: 'Guitar',
  //   keys: [],
  //   tunings: {
  //       standard: ['E', 'A', 'D', 'G', 'B', 'E']
  //   }
  // }

  function GuitarChord () {
    const [chord, setChord] = useState({
      frets: [],
      fingers: [],
      barres: [],
      capo: false,
    });

    const [chordName, setChordName] = useState("Choose A Chord")

    const [instrument, setInstrument] = useState({
      strings: 6,
      fretsOnChord: 4,
      name: 'Guitar',
      keys: [],
      tunings: {
        standard: ['E', 'A', 'D', 'G', 'B', 'E']
      }
    });

     
    return (
        <div className="display">
          <div className="dropdown-div">
            <DropDownMenu setChordName={setChordName} setChord={setChord}/>
          </div>
          <h3>{chordName}</h3>
          <div className="chord-div">
              <Chord chord={chord} instrument={instrument}/>
              <div className="buttons-div">
                  <Listen />
                  <AddToMyChords />
              </div>
          </div>
        </div>
    )
  };

  export default GuitarChord;