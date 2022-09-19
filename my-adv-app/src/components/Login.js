import React, { useState,useContext} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import './Login.css';
import { useNavigate } from "react-router-dom";




  function Login(props){
    const value = useContext(props.stateData);
    console.log("hello",value)
   
      const [userEmail, setEmail] = useState('');
      const [userPassword, setPassword] = useState('');
      const handleEmailChange = (value) => 
      {setEmail(value);};

      const handlePasswordChange = (value) => 
      {setPassword(value);};
      const Navigate = useNavigate();

      
      const handleSubmit = () =>
      {

        const data =

        {

          UserEmail: userEmail,

          UserPassword: userPassword

        };
        
        Navigate("/");

        const url = 'https://localhost:44331//api/User/Login';

        axios.post(url,data).then((result) =>

        {
          value.setIsLogin({key:result.data,userName:userEmail})
          alert(result.data)

        }).catch((error)=>

        {

          alert(error);

        })

       

      }

        return(

            <div className="form-Container" >
                
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmailChange(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => handlePasswordChange(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </Form>
            </div>
        )
    }
export default Login;
