import Chord from "@tombatossals/react-chords/lib/Chord";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

import GuitarApi from "../Api";

import "./DropDown.css"

///don't keep pick a chord here
const roots = ["Pick a Chord", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#", "Cb", "C", "C#",
                "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#"];

const rootsItems = [];

///don't keep pick a quality here
const qualities = ["Pick a quality", "major", "minor", "7th", "maj7", "min7", "augmented", "diminished"];

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
        setChordName(`${formData.roots.toLowerCase()}-${formData.qualities} Chord`);
        // let chord = await GuitarApi.getChord()

        async function getChordFromApi() {
            alert("calling api")
            let chord = await GuitarApi.getChord(`${formData.roots.toLowerCase()}-${formData.qualities}`);
            
        }

        getChordFromApi()
        
        setChord({
            ///just a test for now to see how the chords will pop up
            /// this data needs to come from the DB/API
            frets: [1, 3, 3, 2, 1, 1],
            fingers: [1, 3, 4, 2, 1, 1],
            barres: [],
            capo: false
        })
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