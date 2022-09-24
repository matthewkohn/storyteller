import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, styled, TextField } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import AuthError from '../pages/landing/login-side/AuthError';
import { handleAPI } from '../../helpers/fetchRequests';
import { credentialCss, loginBoxCss, submitBtnCss } from '../../styles/login/loginCss';


const LoginForm = ({ isSignup, onUserInput, userInfo }) => {
  const { setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  let apiEndpoint = '';
  let navEndpoint = '';
  if (isSignup) {
    apiEndpoint = '/signup';
    navEndpoint = '/start';
  } else {
    apiEndpoint = '/login';
    navEndpoint = '/home';
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    handleAPI(apiEndpoint, "POST", userInfo)
    .then((res) => {
      if (res.ok) {
        res.json().then((newUser) => setUser(newUser))
        .then(() => navigate(navEndpoint));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const input = (attr, autoFocus, val) => {
    return (
      <Credential
        autoFocus={ autoFocus }
        required
        label={ attr }
        name={ attr }
        type={ attr }
        value={ val }
        onChange={ (e) => onUserInput(e) } />
    )
  }

  return (
    <FormControl variant="standard" >
      <LoginBox 
        component="form" 
        onSubmit={ (e) => handleLogin(e) } 
        id="login-form"
      >
        { input("username", true, userInfo.username) }
        { input("password", false, userInfo.password) }
      { isSignup ?
          <Credential 
          required 
          label="confirm password"
          name="password_confirmation"
          type="password"
          value={ userInfo.password_confirmation }
          onChange={ (e) => onUserInput(e) }
        />
        : null
      }
        <SubmitBtn 
          size="large" 
          variant="outline" 
          type="submit" 
          form="login-form"
          endIcon={ isSignup ? <AppRegistrationIcon /> : <LoginIcon /> }
        >
          { isSignup ? "Let's Begin" : "Log In" }
        </SubmitBtn>
      </LoginBox>
      { errors.map((err) => <AuthError key={ err }>{ err }</AuthError>) }
    </FormControl>
  )
}

export default LoginForm

// Styled components
const LoginBox = styled(Box)(loginBoxCss);
const Credential = styled(TextField)(credentialCss);
const SubmitBtn = styled(Button)(submitBtnCss);