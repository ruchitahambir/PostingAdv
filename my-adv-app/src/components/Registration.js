import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import './Registration.css';
import { useNavigate } from "react-router-dom";


// export class Registration extends Component { 
//render() {
function Registration() {
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userContact, setContact] = useState('');

    const handleNameChange = (value) => { setName(value); };

    const handleEmailChange = (value) => { setEmail(value); };

    const handlePasswordChange = (value) => { setPassword(value); };

    const handleContactChange = (value) => { setContact(value); };

    const Navigate = useNavigate();
    const handleSubmit = () => {
        const data =
        {
            UserName: userName,
            UserEmail: userEmail,
            UserPassword: userPassword,
            UserContact: userContact
        };
        Navigate("/");
        const url = 'https://localhost:44331/api/User/Registration';
        axios.post(url, data).then((result) => {
            alert(result.data)
        }).catch((error) => {
            alert(error);
        })
    }

    return (
        <div className="Regi-Container">
            <h3> Registration page</h3>
            <Form>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="please enter full name" onChange={(e) => handleNameChange(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmailChange(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => handlePasswordChange(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control placeholder="1234 " onChange={(e) => handleContactChange(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
//}
export default Registration;