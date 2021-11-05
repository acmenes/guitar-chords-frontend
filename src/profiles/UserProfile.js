import React, { useState, useContext } from "react";

import LogOutButton from "./LogOutButton";
import UserContext from "../userforms/UserContext";
import PracticeList from "./PracticeList";
import MasterList from "./MasterList";

import "./UserProfile.css"

function UserProfile () {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { hasAddedChord, addChordToUserList } = useContext(UserContext)

    console.debug(currentUser)

    if(currentUser === null) return ("please log in or sign up")

    return (
    <div className="user-profile">
        <h1>Profile for {currentUser[0].username} </h1>
        <PracticeList currentUser={currentUser} />
        <MasterList currentUser={currentUser}/>
        <LogOutButton />
    </div>)
};

export default UserProfile;