import React, { useState } from 'react';
import SignupForm from '../../../forms/SignupForm';
import NewUserForm from '../../../forms/NewUserForm';
import { Button, styled, Typography } from '@mui/material';
import { taglineCss, titleCss, toggleBtnCss } from '../../../../styles/login/loginCss';


const NewUser = ({ onToggle }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    password_confirmation: '',
    favorite_author: '',
    favorite_book: '',
    favorite_audiobook: '',
    favorite_podcast: ''
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
      <Tagline variant='h5'>Create a Free Account</Tagline>
      { isSignedUp ? 
          <NewUserForm 
            // onGoBack={ setIsSignedUp } 
            // userInfo={ userInfo }
            // onUserInput={ handleUserInput }
          /> 
          : 
          <SignupForm 
            onSignup={ setIsSignedUp } 
            userInfo={ userInfo }
            onUserInput={ handleUserInput }
          /> 
      }

      <Typography variant='subtitle2'>
        Already signed up? &nbsp;
        <ToggleBtn onClick={ () => onToggle(false) } >
          Log In
        </ToggleBtn>
      </Typography>
    </>
  )
}

export default NewUser

// Styled components
const Title = styled(Typography)(titleCss);
const Tagline = styled(Typography)(taglineCss);
const ToggleBtn = styled(Button)(toggleBtnCss);
