import React, { useState,useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [enteredcollegename, setenteredcollegename]=useState('')
  const [collegenameisvalid, setcollegenameisvaild]=useState('')
  const [formIsValid, setFormIsValid] = useState(false);


// useEffect(()=>{
//   console.log("EFFECT RUNNING")
// });


// useEffect(()=> {
//   console.log("EFFECT RUNNING")
// },[])

// console.log("beforre useeffect")


// useEffect(()=> {
//   console.log("password changed")
// }, [enteredPassword])

// useEffect(()=> {

//   console.log("first cleanup effect");

//   return ()=> {
//     console.log("effect cleanup")
//   }
// }, [enteredPassword])

useEffect(()=>{

  const identifier=setTimeout(()=> {
    console.log("check form validity")
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredcollegename.trim().length>0
    );
    

  },500)
  return ()=> {
    console.log('cleanup')
    clearTimeout(identifier)
  }

  // setFormIsValid(
  //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
  // );


},[ enteredEmail,enteredPassword,enteredcollegename] )



  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

   
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

   
  };

  const collegenamechangehandler=(event)=> {
    setenteredcollegename(event.target.value)
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validcollegenamehandler=()=> {
    setcollegenameisvaild(enteredcollegename.trim().length>0)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword,enteredcollegename);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegenameisvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="collegename">collegename</label>
          <input
            type="text"
            id="collegename"
            value={enteredcollegename}
            onChange={collegenamechangehandler}
            onBlur={validcollegenamehandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
