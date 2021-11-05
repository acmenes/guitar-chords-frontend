import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import UserContext from "../userforms/UserContext";

import GuitarApi from "../Api";

function MasterListChord({ chord_fullname, done}) {
    
    return (
        <div className="masterlist-list-chord">
            <li>{chord_fullname} <FontAwesomeIcon icon={faCheck}/></li>
        </div>
    )
}

export default MasterListChord;