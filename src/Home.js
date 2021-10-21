import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import GuitarApi from "./Api.js"

import "./Home.css"

const guitarImage = require("./img/guitar.jpg")

// const guitarImage = "https://unsplash.com/photos/fCEJGBzAkrU"

function Home () {
    const [chords, setChords] = useState([]);

    useEffect(function getChords(){
        listChords();
    }, []);

    async function listChords() {
        // let chordRes = await GuitarApi.getAllChords();
        // setChords(chordRes)
    };

    return (
        <section className="main">
            <Card>
                <CardBody classname="text-center">
                    <CardTitle>
                        <h2>It's time to learn guitar {chords}</h2>
                        <img className="image" src={guitarImage.default} />
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    )
};

export default Home; 