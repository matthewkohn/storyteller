import React from 'react';
import { Box, styled } from '@mui/material';
import { signInContainerCss } from '../../../../styles/login/loginCss';
import Login from './Login';

const LoginBox = () => {
  return (
    <SignInContainer component='section'>
      <Login />
    </SignInContainer>
  )
}

export default LoginBox

// Styled components
const SignInContainer = styled(Box)(signInContainerCss);