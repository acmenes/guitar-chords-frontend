import React, { useState, useContext, useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import GuitarApi from "../Api";

import MasterListChord from "./MasterListChord";

import "./UserProfile.css"

function MasterList({ currentUser, masteredChords }) {    
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