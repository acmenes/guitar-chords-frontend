import React, { useState } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


function ProgressionSingle({ id, chord1, chord2, chord3, chord4 }) {
    
    function addToList(evt) {
        alert("added to practice list")
        alert(evt.target)
    }

    return (
        <div className="chord-progression">
            <Card className="text-center" body>
                    {/* <Card.Text> */}
                        {chord1} {chord2} {chord3} {chord4}
                    {/* </Card.Text> */}
                    <div className="button-div">
                        <Button onClick={addToList} variant="primary" size="sm">Add to your practice list</Button>
                    </div>
            </Card>
            
        </div>
    )
}

export default ProgressionSingle;