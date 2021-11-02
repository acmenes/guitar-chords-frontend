import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

import GuitarApi from "../Api";

import "./GuitarChord.css";
import ProgressionList from "./ProgressionsList";

function Progressions() {
    
    const [progressions, setProgressions] = useState([])
    
    useEffect(function getProgressions(){
        getProgressionsFromApi();
    }, []);

    async function getProgressionsFromApi() {
        let progressionsResult = await GuitarApi.getAllProgressions()
        setProgressions(progressionsResult);
    }
    
    return (
        <div className="progressions-div">
            <h2>Practice Progressions</h2>
                <div className="card-div">
                    <Card style={{ width: '20 rem' }}>
                        <Card.Body>A chord progression is a sequence of chords. 
                            Learning chord progressions is the basis to learning how to strum your favorite songs.
                            Be sure to practice a few of the progressions on this page! 
                            Learning a few of these progressions will prepare you to play
                            pretty much any rock/pop or country song you want to play.</Card.Body>
                    </Card>
                </div>
            <div className="progressions-list">
                <h3>Progressions:</h3>
                <ProgressionList progressions={progressions} />
            </div>
        </div>
    )
};

export default Progressions;