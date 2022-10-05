import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {registration, login} from "../http/userAPI"
// import {useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "../utils/consts";

function Registration () {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   // const isLogin = location.pathname === LOGIN_ROUTE;
   // const location = useLocation();
   // const history = useHistory();




   return (  
   <div className="form_auth"> 
      <h1>Registration</h1>
      <Form className="form">
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
         </Form.Group>
         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
   </div>
   );
}

export default Registration;