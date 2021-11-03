import React, { useState, useContext } from "react";

import LogOutButton from "./LogOutButton";
import UserContext from "../userforms/UserContext";
import GuitarApi from "../Api";
import PracticeList from "./PracticeList";
import MasterList from "./MasterList";

import "./UserProfile.css"

function UserProfile () {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { hasAddedChord, addChordToUserList } = useContext(UserContext)

    if(currentUser === null) return ("please log in or sign up")

    console.debug(currentUser)
    console.debug(currentUser[0].username)

    return (
    <div className="user-profile">
        <h1>Profile for {currentUser[0].username} {currentUser.hadAddedChord} </h1>
        <PracticeList />
        <MasterList />
        <LogOutButton />
    </div>)
};

export default UserProfile;