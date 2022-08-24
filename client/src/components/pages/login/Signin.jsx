import React, { useState } from 'react'
import LoginForm from '../../forms/LoginForm'
import { Box, Button, Container, styled, Typography } from '@mui/material'
import { backgroundContainerCss, signInContainerCss, taglineCss, titleCss, toggleBtnCss } from '../../../styles/login/loginCss'

const SignIn = ({ setCurrentUser }) => {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <BackgroundContainer maxWidth='xl' disableGutters>
      <SignInContainer component='section'>
        <Title variant='h3'>Storyteller</Title>
        { showSignUp ? 
          <Tagline variant='h5'>Sign Up for Free</Tagline>
          :
          <>
            <Tagline variant='h5'>Tell Your Stories.</Tagline>
            <Tagline variant='h6'>Login Here.</Tagline>
          </>
        }
        <LoginForm onLogin={setCurrentUser} showSignUp={showSignUp} />
        { showSignUp ?
          <Typography variant='subtitle2'>
            Already have an account? &nbsp;
            <ToggleBtn onClick={ () => setShowSignUp(false) } >
              Log In
            </ToggleBtn>
          </Typography>
          :
          <Typography variant='subtitle2'>
            Don't have an account? &nbsp;
            <ToggleBtn onClick={ () => setShowSignUp(true) } >
              Sign Up
            </ToggleBtn>
          </Typography>
        }    
      </SignInContainer>
    </BackgroundContainer>
  )
}

export default SignIn


const BackgroundContainer = styled(Container)(backgroundContainerCss)

const SignInContainer = styled(Box)(signInContainerCss)

const Title = styled(Typography)(titleCss)

const Tagline = styled(Typography)(taglineCss)

const ToggleBtn = styled(Button)(toggleBtnCss)