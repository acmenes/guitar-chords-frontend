import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";

import "./Forms.css"

function SignUp() {
    return (
    <div className="form">
        <h2>Sign Up For Chordly!</h2>
        <Form>
            <Row>
                <Col xs={7}>
                    <Form.Label htmlForm="username">Your Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username"></Form.Control>
                    <Form.Label htmlForm="password">Password</Form.Label>
                    <Form.Control type="text" placeholder="Pick a password"></Form.Control>
                    <Button className="form-button">Time to Rock!</Button>
                </Col>
            </Row>
        </Form>
      </div>
    )
};

export default SignUp;