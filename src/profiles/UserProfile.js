import React, { useState, useContext, useEffect } from "react";

import UserContext from "../userforms/UserContext";
import PracticeList from "./PracticeList";
import MasterList from "./MasterList";

import GuitarApi from "../Api";


import "./UserProfile.css"

function UserProfile () {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { hasAddedChord, addChordToUserList } = useContext(UserContext)
    const [practiceChords, setPracticeChords] = useState([])
    const [masteredChords, setMasteredChords] = useState([])
    const [updateChordList, setUpdateChordList] = useState(false)

    useEffect(function getUserChordsFromApi(){
        getUserPracticeChords();
    }, []);

    if(updateChordList === true) {
        getUserPracticeChords();
    }

    console.debug(currentUser)
    if(currentUser === null) return "Please log in or sign up."

    async function getUserPracticeChords() {
        let userChords = await GuitarApi.getUserChords(currentUser[0].username)
        let practiceChordsArray = []
        let masteredChordsArray = []

        if(userChords.length === 0) setPracticeChords("Start adding some chords to your list!")
    
        for(let x = 0; x < userChords.length; x++) {
            console.debug(userChords[x].done)
            if(userChords[x].done === false) {
                practiceChordsArray.push(userChords[x])
            } else if(userChords[x].done === true) {
                masteredChordsArray.push(userChords[x])
            }
        }
        setPracticeChords(practiceChordsArray)
        setMasteredChords(masteredChordsArray)
        console.debug(`practice chords: ${practiceChords}`)
    }

    if(currentUser === null) return ("please log in or sign up")

    return (
    <div className="user-profile">
        <h1>Profile for {currentUser[0].username} </h1>
        <PracticeList 
            currentUser={currentUser} 
            practiceChords={practiceChords}
            updateChordList={updateChordList} />
        <MasterList 
            currentUser={currentUser} 
            masteredChords={masteredChords}
            updateChordList={updateChordList} />
    </div>)
};

export default UserProfile;