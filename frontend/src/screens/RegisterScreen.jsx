import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";



const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit');
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>

        <Form onSubmit={submitHandler}>

        <Form.Group className="my-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter Name" 
                value={name} onChange={(ev) => setName(ev.target.value)}
                />   
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter Email" 
                value={email} onChange={(ev) => setEmail(ev.target.value)}
                />   
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter Password" 
                value={password} onChange={(ev) => setPassword(ev.target.value)}
                />   
            </Form.Group>

            <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword} onChange={(ev) => setConfirmPassword(ev.target.value)}
                />   
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">Sign In</Button>

            <Row className="py-3">
                <Col>
                Already have an account? <Link to={'/login'}>Login</Link>
                </Col>
            </Row>

        </Form>

    </FormContainer>
  )
}

export default RegisterScreen