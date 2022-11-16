import React from 'react';
import { Container, styled, Typography } from '@mui/material';
import NewStoryForm from '../../forms/NewStoryForm';
import { newStoryContainerCss, newStoryTitleCss } from '../../../styles/story/storyCss';

const NewStory = () => {
  return (
    <NewStoryContainer>
      <NewStoryTitle variant="h2">New Story</NewStoryTitle>
      <NewStoryForm />
    </NewStoryContainer>
  )
}

export default NewStory

const NewStoryContainer = styled(Container)(newStoryContainerCss);
const NewStoryTitle = styled(Typography)(newStoryTitleCss);