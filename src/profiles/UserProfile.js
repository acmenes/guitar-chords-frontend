import React, { useState, useContext } from "react";

import LogOutButton from "./LogOutButton";
import UserContext from "../userforms/UserContext";
import PracticeList from "./PracticeList";
import MasterList from "./MasterList";

import "./UserProfile.css"

function UserProfile () {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { hasAddedChord, addChordToUserList } = useContext(UserContext)

    if(currentUser === null) return ("please log in or sign up")

    console.debug(currentUser)
    console.debug(currentUser[0].username)
    console.debug(currentUser.hasAddedChord)

    /// look up the user's name and all the chords they have in their list- route is already ready

    return (
    <div className="user-profile">
        <h1>Profile for {currentUser[0].username} </h1>
        <PracticeList currentUser={currentUser} />
        <MasterList />
        <LogOutButton />
    </div>)
};

export default UserProfile;