import React, { useState } from 'react'
import LoginForm from '../../forms/LoginForm'
import { Box, Button, styled, Typography } from '@mui/material'

const SignIn = ({ setCurrentUser }) => {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
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
  )
}

export default SignIn


const SignInContainer = styled(Box)(({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  width: 500px;
  min-height: 585px;
  border-radius: 20px;
  margin: 100px auto;
  background: ${theme.palette.primary.dark};
  color: ${theme.palette.primary.light};
`)

const Title = styled(Typography)({
  margin: '20px auto',
  fontWeight: 700,
  letterSpacing: '2px'
})

const Tagline = styled(Typography)({
  margin: '20px 0 30px'
})

const ToggleBtn = styled(Button)(({ theme }) => `
  :hover {
    background: ${theme.palette.secondary.light};
    color: ${theme.palette.secondary.dark};
  }
`)