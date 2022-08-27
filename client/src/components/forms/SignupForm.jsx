import React, { useContext, useState } from 'react';
import { Box, Button, FormControl, styled, TextField } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { UserContext } from '../../context/UserContext';
import { handleAPI } from '../../helpers/fetchRequests';
import { credentialCss, loginBoxCss, submitBtnCss } from '../../styles/login/loginCss';
import AuthError from '../pages/landing/form-side/AuthError';


const SignupForm = ({ onSignUp, onUserInput, userInfo }) => {
  const { setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handleAPI("/signup", "POST", userInfo)
    .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((newUser) => setUser(newUser))
        .then(() => onSignUp(true));
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
      <SignupBox 
        component="form" 
        onSubmit={ (e) => handleSignup(e) } 
        id="signup-form"
      >
        { input("username", true, userInfo.username) }
        { input("password", false, userInfo.password) }
        <Credential 
          required 
          label="confirm password"
          name="password_confirmation"
          type="password"
          value={ userInfo.password_confirmation }
          onChange={ (e) => onUserInput(e) }
        />
        <SubmitBtn 
          size="large" 
          variant="outline" 
          type="submit" 
          form="signup-form"
          endIcon={ <AppRegistrationIcon /> }
        >
          { isLoading ? "LOADING..." : "Let's get started!" }
        </SubmitBtn>
      </SignupBox>
      { errors.map((err) => <AuthError key={ err }>{ err }</AuthError>) }
    </FormControl>
  )
}

export default SignupForm

// Styled components
const SignupBox = styled(Box)(loginBoxCss);
const Credential = styled(TextField)(credentialCss);
const SubmitBtn = styled(Button)(submitBtnCss);