import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { taglineCss, welcomeBoxCss } from '../../../../styles/login/loginCss';
import AuthError from '../../../forms/AuthError';


const RenderWelcome = ({ errors, isNewUser, onError }) => {

  const displayErrors = () => {
    return errors.map((err) => (
      <AuthError key={ err } clearMessage={ onError } >{ err }</AuthError>
    ))
  }

  const displayInstructions = () => {
    if (isNewUser) {
      return <Tagline variant='h5'>Create a Free Account</Tagline>
    } else {
      return (
        <>
          <Tagline variant='h5'>Tell Your Stories.</Tagline>
          <Tagline variant='h6'>Login Here.</Tagline>
        </>
      )
    }
  }

  return (
    <WelcomeBox>
    {
      errors ?
        displayErrors()
      :
        displayInstructions()
    }
    </WelcomeBox>
  )
}


export default RenderWelcome

const Tagline = styled(Typography)(taglineCss);
const WelcomeBox = styled(Box)(welcomeBoxCss);