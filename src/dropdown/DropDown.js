import Chord from "@tombatossals/react-chords/lib/Chord";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

import GuitarApi from "../Api";

import Alert from "../common/Alert"


import "./DropDown.css"

///don't keep pick a chord here
const roots = ["Pick a Chord", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#", "Cb", "C", "C#",
                "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#"];

const rootsItems = [];

///don't keep pick a quality here
const qualities = ["Pick a quality", "major", "minor", "7", "maj7", "min7", "augmented", "diminished"];

const qualitiesItems = [];

function DropDownMenu({ setChordName, setChord }) {
    const [formData, setFormData] = useState({
        roots: "",
        qualities: "",
    });
   
    const handleChangeRoot = evt => {
        const { roots, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            roots: value,
        }));
    };

    const handleChangeQuality = evt => {
        const { qualities, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            qualities: value,
        }));
    };

    /// it keeps pushing to the array pls stop
    for (const [index, value] of roots.entries()) {
        rootsItems.push(<option value={formData.index}>{value}</option>)
    }

    for (const [index, value] of qualities.entries()) {
        qualitiesItems.push(<option value={formData.index}>{value}</option>)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        console.debug(formData)
        setChordName(`${formData.roots} ${formData.qualities} Chord`);
        // let chord = await GuitarApi.getChord()

        async function getChordFromApi() {
            alert("calling api")
            let chord = await GuitarApi.getChord(`${formData.roots.toLowerCase()}-${formData.qualities}`);
            let chordData = chord.chord[0]
            console.log(chordData)

            /// this can later be turned into a hook?
            let frets = chordData.frets.split(",")
            let fretsArray = []
            for(let x = 0; x < frets.length; x++) {
                fretsArray.push(parseInt(frets[x]))
            }
            
            let fingers = chordData.fingers.split(",")
            let fingersArray = []
            for(let x = 0; x < fingers.length; x++) {
                fingersArray.push(parseInt(fingers[x]))
            }

            let barresArray = []
            if(chordData.barres === "None") {
                barresArray.push()
            }
            else{
                let barres = chordData.barres.split(" ")
                for(let x = 0; x < barres.length; x++) {
                    barresArray.push(parseInt(barres[x]))
                }
            }

            setChord({
                frets: fretsArray,
                fingers: fingersArray,
                barres: barresArray,
                capo: false,
            })
        }

        getChordFromApi()

        /// should display an alert if the chord isn't found
    }
    return(
        <div className="dropdown-div">
       <Form>
           <Form.Label htmlFor="root-select" className="form-option">Select Your Root</Form.Label>
           <Form.Select onChange={handleChangeRoot}>
               {rootsItems}
           </Form.Select>
       </Form>
       <Form>
           <Form.Label htmlFor="quality-select" className="form-option">Select Chord Type</Form.Label>
           <Form.Select onChange={handleChangeQuality}>
               {qualitiesItems}
           </Form.Select>
           <Button onClick={handleSubmit} className="load-chord">Load Chord</Button>
       </Form>
       </div>

    )    
};

export default DropDownMenu;