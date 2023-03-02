import React from 'react';
import { Box, Button, FormControl, styled, TextField } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { loginTextField, loginBoxCss, submitBoxCss, submitBtnCss } from '../../../styles/loginPageCss';
import AuthError from './AuthError';

const LoginForm = ({ errors, isNewUser, onError, onLogin, onUserInput, userInput }) => {

  const insertTextField = (value, label, name, type) => {
    return (
      <LoginTextField
        value={ value }
        label={ label }
        name={ name }
        type={ type }
        onChange={ (e) => onUserInput(e) } 
        required
        size="small"
      />
    )
  };

  const displayErrors = () => {
    return errors.map((err) => (
      <AuthError key={ err } timeoutErrorMessage={ onError } >{ err }</AuthError>
    ))
  };

  return (
    <>
      <FormControl variant="standard" >
        <LoginBox 
          component="form" 
          onSubmit={ (e) => onLogin(e) } 
          id="login-form"
        >
          { insertTextField(userInput.username, "username", "username", "username") }
          { insertTextField(userInput.password, "password", "password", "password") }
          { isNewUser ? insertTextField(userInput.password_confirmation, "confirm password", "password_confirmation", "password") : null }
          <SubmitBox>
            { errors ?
              displayErrors()
              :
              <SubmitBtn 
                size="large" 
                variant="outline" 
                type="submit" 
                form="login-form"
                endIcon={ isNewUser ? <AppRegistrationIcon /> : <LoginIcon /> }
              >
                { isNewUser ? "Let's Begin" : "Log In" }
              </SubmitBtn>
            }
          </SubmitBox>
        </LoginBox>
      </FormControl>
    </>
  )
}

export default LoginForm

// Styled components
const LoginBox = styled(Box)(loginBoxCss);
const LoginTextField = styled(TextField)(loginTextField);
const SubmitBox = styled(Box)(submitBoxCss);
const SubmitBtn = styled(Button)(submitBtnCss);