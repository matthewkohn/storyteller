import React, { useState } from 'react';
import { Button, styled, Typography } from '@mui/material';
import { taglineCss, titleCss, toggleBtnCss } from '../../../../styles/login/loginCss';
import LoginForm from '../../../forms/LoginForm';

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
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
    { isNewUser ?
      <Tagline variant='h5'>Create a Free Account</Tagline>
      :
      <>
        <Tagline variant='h5'>Tell Your Stories.</Tagline>
        <Tagline variant='h6'>Login Here.</Tagline>
      </>
    }
      <LoginForm 
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

// Styled components
const Title = styled(Typography)(titleCss);
const Tagline = styled(Typography)(taglineCss);
const ToggleBtn = styled(Button)(toggleBtnCss);