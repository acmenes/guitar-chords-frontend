import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import "./Forms.css"

function LogIn({ login }) {
    const history = useHistory();

    const [formData, setFormData] = useState([]);

    async function handleSubmit(evt) {
        evt.preventDefault();
    }
    
    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        if (result.success) {
          history.push("/chords");
        } else {
          setFormErrors(result.errors);
        }
      }
    
      /** Update form data field */
      function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
      }


    return (
        <div className="form">
        <h2>Log In And Practice Guitar!</h2>
        <Form>
            <Row>
                <Col xs={7}>
                <Form.Label htmlForm="username">Your Username</Form.Label>
                    <Form.Control 
                        onChange={handleChange}
                        type="text"
                        placeholder="Your username"></Form.Control>
                    <Form.Text value={formData.username}></Form.Text>
                    <Form.Label htmlForm="password">Password</Form.Label>
                    <Form.Control 
                        onChange={handleChange} 
                        type="password" 
                        placeholder="Your password"></Form.Control>
                    <Form.Text value={formData.password}></Form.Text>
                    <Button onClick={handleSubmit} className="form-button">Log Into Chordly</Button>
                </Col>
            </Row>
        </Form>
      </div>
    ) 
};

export default LogIn;