import React from 'react';
import { Button, styled, Typography } from '@mui/material';
import { toggleBtnCss } from '../../../styles/loginPageCss';

const LoginFooter = ({ isNewUser, onToggle }) => {
  return (
    <>
    { isNewUser ?
      <Typography variant='subtitle2'>
        Already signed up? &nbsp;
        <ToggleBtn onClick={ () => onToggle() } >
          Log In
        </ToggleBtn>
      </Typography>
      :
      <Typography variant='subtitle2'>
        Don't have an account? &nbsp;
        <ToggleBtn onClick={ () => onToggle()} >
          Sign Up
        </ToggleBtn>
      </Typography>
    }
    </>
  )
}

export default LoginFooter;

const ToggleBtn = styled(Button)(toggleBtnCss);