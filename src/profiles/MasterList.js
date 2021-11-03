import React, { useState, useContext } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import GuitarApi from "../Api";

import "./UserProfile.css"

function MasterList({ currentUser }) {
    const [masteredChords, setMasteredChords] = useState("Get to practicing so you can add to this list!")

    /// set it later on so it displays this message if the user doesn't have any mastered chords in their list.
    
    return (
        <div className="list-div">
            <Card>
                <CardBody>
                    <h3>Learned:</h3>
                    {masteredChords}
                </CardBody>
            </Card>
        </div>
    )
};

export default MasterList;