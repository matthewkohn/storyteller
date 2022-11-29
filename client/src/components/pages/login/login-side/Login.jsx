import React, { useState } from 'react';
import { Button, styled, Typography } from '@mui/material';
import { titleCss, toggleBtnCss } from '../../../../styles/login/loginCss';
import RenderWelcome from './RenderWelcome';
import LoginForm from '../../../forms/LoginForm';

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [errors, setErrors] = useState(null);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    password_confirmation: ''
  });

  const handleUserInput = (e) => {
    const inputName = e.target.name;
    setUserInfo({
      ...userInfo, 
      [inputName]: e.target.value
    })
  }


  return (
    <>
      <Title variant='h3'>Storyteller</Title>
      <RenderWelcome
        errors={ errors }
        isNewUser={ isNewUser }
        onError={ setErrors }
      />
      <LoginForm
        onErrorMessage={ setErrors } 
        isSignup={ isNewUser }
        userInfo={ userInfo }
        onUserInput={ handleUserInput }
      />
    { isNewUser ? 
      <Typography variant='subtitle2'>
        Already signed up? &nbsp;
        <ToggleBtn onClick={ () => setIsNewUser(false) } >
          Log In
        </ToggleBtn>
      </Typography>
      :
      <Typography variant='subtitle2'>
        Don't have an account? &nbsp;
        <ToggleBtn onClick={ () => setIsNewUser(true) } >
          Sign Up
        </ToggleBtn>
      </Typography>
    }           
    </>
  )
}

export default Login

const Title = styled(Typography)(titleCss);

const ToggleBtn = styled(Button)(toggleBtnCss);