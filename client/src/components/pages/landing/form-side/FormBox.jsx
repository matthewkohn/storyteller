import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { signInContainerCss } from '../../../../styles/login/loginCss';
import Login from './Login';
import NewUser from './NewUser';

const FormBox = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  
  return (
    <SignInContainer component='section'>

      { isNewUser ? <NewUser onToggle={ setIsNewUser } /> : <Login onToggle={ setIsNewUser } /> }

    </SignInContainer>
  )
}

export default FormBox

// Styled components
const SignInContainer = styled(Box)(signInContainerCss);