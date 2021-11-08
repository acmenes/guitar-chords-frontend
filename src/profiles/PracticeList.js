import React, { useState, useContext, useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import GuitarApi from "../Api";
import PracticeListChord from "./PracticeListChord";

import "./UserProfile.css"

function PracticeList({ currentUser, practiceChords }) {
    return (
        <div className="list-div">
            <Card className="list-card">
                <CardBody>
                    <h3>My Practice List</h3>
                    <div className="practice-list">
                    {practiceChords.map(practiceChord =>(
                        <PracticeListChord
                            chord_fullname={practiceChord.chord_fullname}
                            done={practiceChord.done}
                        />
                    ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};

export default PracticeList;