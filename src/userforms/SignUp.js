import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";

import "./Forms.css"

function SignUp({ signup }) {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        alert("signed up")
        let result = await signup(formData)
        if(result.success) {
            history.push("/chords")
        } else {
            setFormErrors(result.errors)
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
      }

    return (
    <div className="form">
        <h2>Sign Up For Chordly!</h2>
        <Form>
            <Row>
                <Col xs={7}>
                    <Form.Label htmlForm="username">Your Username</Form.Label>
                    <Form.Control 
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your username"></Form.Control>
                    <Form.Text value={formData.username}></Form.Text>
                    <Form.Label htmlForm="password">Password</Form.Label>
                    <Form.Control 
                        onChange={handleChange} 
                        type="password" 
                        placeholder="Pick a password"></Form.Control>
                    <Form.Text value={formData.password}></Form.Text>
                    <Button className="form-button" onClick={handleSubmit}>Time to Rock!</Button>
                </Col>
            </Row>
        </Form>
      </div>
    )
};

export default SignUp;