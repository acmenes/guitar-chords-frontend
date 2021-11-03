import React, { useState, useContext, useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import GuitarApi from "../Api";
import PracticeListChord from "./PracticeListChord";

import "./UserProfile.css"

function PracticeList({ currentUser }) {
    const [practiceChords, setPracticeChords] = useState([])

    useEffect(function getUserChordsFromApi(){
        getUserPracticeChords();
    }, []);


    async function getUserPracticeChords() {
        let userChords = await GuitarApi.getUserChords(currentUser[0].username)
        let userChordsArray = []

        if(userChords.length === 0) setPracticeChords("Start adding some chords to your list!")
    
        for(let x = 0; x < userChords.length; x++) {
            userChordsArray.push(userChords[x].chord_fullname)
            console.log(userChords[x].chord_fullname)
        }
        setPracticeChords(userChordsArray)
        console.debug(`practice chords: ${practiceChords}`)
        console.debug(practiceChords.map(practiceChord => (practiceChord)))
    }

    return (
        <div className="list-div">
            <Card className="list-card">
                <CardBody>
                    <h3>My Practice List</h3>
                    <div className="practice-list">
                    {practiceChords.map(practiceChord =>(
                        <PracticeListChord
                            chord_fullname={practiceChord}
                        />
                    ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};

export default PracticeList;