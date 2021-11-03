import React, { useState, useContext } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import GuitarApi from "../Api";

import "./UserProfile.css"

function PracticeList() {
    const [practiceChords, addPracticeChords] = useState("Start adding some chords to your list!")

    return (
        <div className="list-div">
            <Card className="list-card">
                <CardBody>
                    <h3>My Practice List</h3>
                    {practiceChords}
                </CardBody>
            </Card>
        </div>
    )
};

export default PracticeList;