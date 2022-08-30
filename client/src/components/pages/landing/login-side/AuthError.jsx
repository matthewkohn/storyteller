import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { errorBoxCss } from '../../../../styles/login/loginCss';

const AuthError = ({ children }) => {
  return (
    <ErrorBox>
      {children}
    </ErrorBox>
    
  )
}

export default AuthError

// Styled components
const ErrorBox = styled(Box)(errorBoxCss);