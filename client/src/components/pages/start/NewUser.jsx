import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { UserContext } from '../../../context/UserContext';
import { ctaCss, newUserContainerCss, skipBtnCss } from '../../../styles/start/newUserCss';
import { handleAPI } from '../../../helpers/fetchRequests';
import NewUserForm from '../../forms/NewUserForm';

const NewUser = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSkip = () => {
    // POST to API => create new '/authors'
    handleAPI('/authors', "POST", { name: user.username })
    console.log("SKIPPING....")
    navigate('/home');
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

      <NewUserForm />
      
    </NewUserContainer>
  )
}

export default NewUser

// Styled components
const NewUserContainer = styled(Container)(newUserContainerCss);
const CTA = styled(Box)(ctaCss);
const SkipBtn = styled(Button)(skipBtnCss);