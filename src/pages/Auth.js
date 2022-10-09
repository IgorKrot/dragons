import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {setEmail, setPassword, dataAuth, setLogin} from '../redux/slices/dataAuth'


function Auth () {
   const {isAuth, password, email} = useSelector((state) => state.auth);

   let navigate = useNavigate();
   const dispatch = useDispatch();


   const onSubmit = (e) => {
      dispatch(dataAuth({email, password, isAuth}));
      dispatch(setLogin(true));
      navigate("/");
      e.preventDefault();
   }

   return (  
   <div className="form_auth">
      <h1>login/Reg</h1>   
      <Form className="form">
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
         </Form.Group>
         <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
         </Button>
      </Form>
   </div>
   );
}

export default Auth;