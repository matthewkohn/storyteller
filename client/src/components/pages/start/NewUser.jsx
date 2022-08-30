import React, { useContext, useState } from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { UserContext } from '../../../context/UserContext';
import NewUserForm from '../../forms/NewUserForm';
import { useNavigate } from 'react-router-dom';
import { ctaCss, newUserContainerCss, skipBtnCss } from '../../../styles/start/newUserCss';

const NewUser = () => {
  const { user } = useContext(UserContext);
  const [userInput, setUserInput] = useState({
    penName: user.username,
    favoriteAuthor: '',
    favoriteBook: '',
    favoriteAudiobook: '',
    favoritePodcast: '',
    genre: '',
  })
  const navigate = useNavigate()

  const handleUserInput = (e) => {
    const inputName = e.target.name;
    setUserInput({
      ...userInput, 
      [inputName]: e.target.value
    })
  }

  const handleSkip = () => {
    // POST to API => create new '/authors'
    // navigate client to '/dashboard
    console.log("SKIPPING....")
    navigate('/dashboard');
  }

  return (
    <NewUserContainer>
      <Typography variant="h2">
        Welcome to Storyteller, { user.username }.
      </Typography>
      <CTA>
        <Typography variant="body1">
          Let's get started!
        </Typography>
        <SkipBtn 
          variant="outlined" 
          onClick={ () => handleSkip() }
        >
          Skip for now
        </SkipBtn>
      </CTA>


      <NewUserForm 
        inputs={ userInput } 
        onInputChange={ handleUserInput } 
      />
      
    </NewUserContainer>
  )
}

export default NewUser

// Styled components
const NewUserContainer = styled(Container)(newUserContainerCss);

const CTA = styled(Box)(ctaCss);

const SkipBtn = styled(Button)(skipBtnCss)