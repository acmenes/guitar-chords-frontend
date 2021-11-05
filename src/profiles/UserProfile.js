import React, { useState, useContext, useEffect } from "react";

import LogOutButton from "./LogOutButton";
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

    useEffect(function getUserChordsFromApi(){
        getUserPracticeChords();
    }, []);

    console.debug(currentUser)

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
        console.debug(practiceChords.map(practiceChord => (practiceChord)))
    }

    if(currentUser === null) return ("please log in or sign up")

    return (
    <div className="user-profile">
        <h1>Profile for {currentUser[0].username} </h1>
        <PracticeList currentUser={currentUser} practiceChords={practiceChords} />
        <MasterList currentUser={currentUser} masteredChords={masteredChords}/>
    </div>)
};

export default UserProfile;