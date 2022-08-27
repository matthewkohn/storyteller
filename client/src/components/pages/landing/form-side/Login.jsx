import React from 'react';
import { Button, styled, Typography } from '@mui/material';
import { taglineCss, titleCss, toggleBtnCss } from '../../../../styles/login/loginCss';
import LoginForm from '../../../forms/LoginForm';

const Login = ({ onToggle }) => {

  return (
    <>
      <Title variant='h3'>Storyteller</Title>
      <Tagline variant='h5'>Tell Your Stories.</Tagline>
      <Tagline variant='h6'>Login Here.</Tagline>
      <LoginForm />
      <Typography variant='subtitle2'>
        Don't have an account? &nbsp;
        <ToggleBtn onClick={ () => onToggle(true) } >
          Sign Up
        </ToggleBtn>
      </Typography>
    </>
  )
}

export default Login

// Styled components
const Title = styled(Typography)(titleCss);
const Tagline = styled(Typography)(taglineCss);
const ToggleBtn = styled(Button)(toggleBtnCss);