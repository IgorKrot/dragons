import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {registration, login} from "../http/userAPI"
import {useLocation, useNavigate } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "../utils/consts";
import { useSelector, useDispatch } from 'react-redux'
// import { setUser, setIsAuth } from '../redux/slices/dataUser'
import { setEmail, setPassword, dataAuth } from '../redux/slices/dataAuth'

function Auth () {
   // const [email, setEmail] = useState('');
   // const [password, setPassword] = useState('');
   let navigate = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();
   const {isAuth, user, password, email} = useSelector((state) => state.auth);
   const isLogin = location.pathname === LOGIN_ROUTE;


   // async function startAuth() {
   //    dispatch(dataAuth({email, password, isAuth})); 
   // }

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
         <Button variant="primary" type="submit" onClick={() => dispatch(dataAuth({email, password, isAuth}))}>
            Submit
         </Button>
      </Form>
   </div>
   );
}

export default Auth;






   // const click = async () => {
   //    try {
   //       let data;
   //       if (isAuth) {
   //          data = await login(email, password);
   //       } else {
   //          data = await registration(email, password);
   //       }
   //       dispatch(setUser(data));
   //       dispatch(setIsAuth(true));
   //       navigate(MAIN_ROUTE);
   //    } catch (e) {
   //       alert(e.response.data.message)
   //    }
   // }   