import React, { useState, useContext, useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import GuitarApi from "../Api";

import MasterListChord from "./MasterListChord";

import "./UserProfile.css"

function MasterList({ currentUser }) {
    const [masteredChords, setMasteredChords] = useState("Get to practicing so you can add to this list!")

    useEffect(function getUserChordsFromApi(){
        getUserMasteredChords();
    }, []);


    async function getUserMasteredChords() {
        let userChords = await GuitarApi.getUserChords(currentUser[0].username)
        let userChordsArray = []
        let masteredChordsArray = []

        if(userChords.length === 0) setMasteredChords("Get to practicing!")
    
        for(let x = 0; x < userChords.length; x++) {
            console.debug(userChords[x].done)
            if(userChords[x].done === true) {
                masteredChordsArray.push(userChords[x].chord_fullname)
                console.debug(userChords[x])
            } 
        }
        console.debug(` mastered chords: ${masteredChordsArray}`)
        setMasteredChords(masteredChordsArray)
        console.debug(masteredChords)
    }
    
    return (
        <div className="list-div">
            <Card>
                <CardBody>
                    <h3>Learned:</h3>
                    {masteredChords.map(masteredChord =>(
                        <MasterListChord
                            chord_fullname={masteredChord.chord_fullname}
                            done={masteredChord.done}
                        />
                    ))}
                </CardBody>
            </Card>
        </div>
    )
};

export default MasterList;