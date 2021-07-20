import React,{useState,useEffect} from "react";
import { Form, Button,Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginPage.css";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";

const LoginPage = () => {
  const  history = useHistory();
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailErr,setEmailErr]=useState();
    const [passwordErr,setPasswordErr]=useState();

   const onRegister=()=>{
       if(email.length===0 || password.length===0){
           if(email.length===0){
            setEmailErr('Enter Email')
           }
           if( password.length===0){
             setPasswordErr('Enter Password')
           }
           return;
       }
       firebase
       .auth()
       .createUserWithEmailAndPassword(email,password)
      .then(()=>{
        
      })
      .catch((err)=>{
        console.error(err);
      });

   }; 
   const onLogin=()=>{
    if(email.length===0 || password.length===0){
        if(email.length===0){
         setEmailErr('Enter Email')
        }
        if( password.length===0){
          setPasswordErr('Enter Password')
        }
        return;
    }
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
   .then(()=>{
     console.log('sdadsad')
     history.push('/homepage')
    
     
   })
   .catch((err)=>{
     console.error(err);
     
   });

}; 
  return (
      <div className="div-main">
    <div className="login-div">
      <h2>Login</h2>
      <Form style={{ marginTop: 20 }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email<span style={{color:'red'}}> *</span></Form.Label>
          <Form.Control  type="text" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>
        {email.length===0?<p style={{color:'red'}}>{emailErr}</p>:null}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password<span style={{color:'red'}}> *</span></Form.Label>
          <Form.Control maxLength = {8} type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        {password.length===0?<p style={{color:'red'}}>{passwordErr}</p>:null}
        
        <Button variant="primary" size="sm"
        onClick={()=>{
            onLogin();
        }}>
          Login
        </Button>
        
          <Button
            variant="primary"
            type="submit"
            size="sm"
            style={{marginLeft:5}}
            onClick={()=>{
              onRegister();
          }}>
            Register
          </Button>
    
      </Form>
    </div>
    </div>
  );
};
export default LoginPage;
