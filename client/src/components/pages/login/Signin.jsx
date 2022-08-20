import React, { useState } from 'react'
import LoginForm from '../../forms/LoginForm'

import { Box, Button, styled, Typography } from '@mui/material'

const SignIn = ({ setCurrentUser }) => {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <SignInContainer component='section' >
      <Logo variant='h3'>Storyteller</Logo>
      { showSignUp ? 
        <Title variant='h5'>Sign Up for Free</Title>
        :
        <Title variant='h5'>Login to Order</Title>
      }
      <LoginForm onLogin={setCurrentUser} showSignUp={showSignUp} />
      { showSignUp ?
        <Typography variant='caption'>
          Already have an account? &nbsp;
          <ToggleBtn onClick={ () => setShowSignUp(false) } >
            Log In
          </ToggleBtn>
        </Typography>
        :
        <Typography variant='caption'>
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


const SignInContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  textAlign: 'center',
  color: '#DDC',
  width: 500,
  minHeight: 585,
  borderRadius: '20px',
  margin: '100px auto',
  backgroundColor: '#F26F63',
  '&:hover': {
    backgroundColor: '#049DD9',
    opacity: [0.9, 0.8, 0.7]
  }
})

const Logo = styled(Typography)({
  margin: '20px auto',
  fontStyle: 'italic',
  letterSpacing: '2px'
})

const Title = styled(Typography)({
  margin: '20px 0 30px'
})

const ToggleBtn = styled(Button)({
  color: 'blue',
  '&:hover': {
    backgroundColor: 'lightblue'
  }
})