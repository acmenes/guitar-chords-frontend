import React, { useContext } from "react";

import LogOutButton from "./LogOutButton";
import UserContext from "../userforms/UserContext";
import GuitarApi from "../Api";

function UserProfile () {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    console.debug(currentUser)

    return (
    <div className="user-profile">
        <h1>Profile for {currentUser[0].username} </h1>
        <LogOutButton />
    </div>)
};

export default UserProfile;