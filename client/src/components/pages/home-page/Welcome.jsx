import React, { useContext } from 'react';
import { newStoryBtnCss, welcomeTextCss, instructionsTextCss, welcomeSectionCss } from '../../../styles/homePageCss';
import { Box, Button, styled, Typography } from '@mui/material';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <WelcomeSection>
        <WelcomeText>Welcome to STORYTELLER, {user.username}!</WelcomeText>
        <InstructionsText>Choose a story below, or create a new one.</InstructionsText>
        <NewStoryBtn 
          variant="contained"
          onClick={ () => navigate('/story/new') } 
          >
          Create New Story
        </NewStoryBtn>
      </WelcomeSection>
    </>
  )
}

export default Welcome


const WelcomeSection = styled(Box)(welcomeSectionCss);
const WelcomeText = styled(Typography)(welcomeTextCss);
const InstructionsText = styled(Typography)(instructionsTextCss);
const NewStoryBtn = styled(Button)(newStoryBtnCss);