import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StoryControlPanel from './StoryControlPanel';
import { dashboardCss, newStoryBtnCss, controlSectionCss, storiesSectionCss, welcomeTextCss, instructionsTextCss } from '../../../styles/homePageCss';
import { UserContext } from '../../../context/UserContext';
import Bookshelf from './Bookshelf';

const HomePage = () => {
  const [bookshelfStories, setBookshelfStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [noStories, setNoStories] = useState(false);
  const [url, setUrl] = useState('/stories');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

// HomePage should handle stories
// Bookshelf should display stories
// Control panel should update stories
// useEffect(() => {
  //   category === 'My Stories') ? onUpdateUrl(`/stories-by-user`) : onUpdateUrl(`/stories`)
  // , [category, onUpdateUrl])

  // sets stories
  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((stories) => {
        if (stories.length > 0) {
          setNoStories(false);
          setAllStories(stories);
          setBookshelfStories(stories);
        } else {
          setNoStories(true);
        }
      })
    })
  }, [url]);

  const handleUpdateStories = (stories) => {
    if (stories !== []) {
      setNoStories(false);
      setBookshelfStories(stories);
    } else {
      setNoStories(true);
    }
  };

  const handleUpdateUrl = (newUrl) => {
    setUrl(newUrl)
  };

  return (
    <Dashboard>
      <ControlSection>
        <WelcomeText>Welcome to Storyteller, {user.username}!</WelcomeText>
        <InstructionsText>Choose a story from the Bookshelf, and pick up where the previous author left off. Or, being writing a new one to share with other authors.</InstructionsText>
        <NewStoryBtn 
          variant="contained"
          onClick={ () => navigate('/story/new') } 
          >
          Create a New Story Here
        </NewStoryBtn>
        <StoryControlPanel
          allStories={ allStories }
          bookshelfStories={ bookshelfStories }
          onUpdateStories={ handleUpdateStories }
          onUpdateUrl={ handleUpdateUrl }
        />
      </ControlSection>
      <StoriesSection>
        <Bookshelf
          bookshelfStories={ bookshelfStories }
          noStories={ noStories }
        />
      </StoriesSection>
    </Dashboard>
  )
}

export default HomePage

const Dashboard = styled(Container)(dashboardCss);
const ControlSection = styled(Box)(controlSectionCss);
const WelcomeText = styled(Typography)(welcomeTextCss);
const InstructionsText = styled(Typography)(instructionsTextCss);
const StoriesSection = styled(Box)(storiesSectionCss);
const NewStoryBtn = styled(Button)(newStoryBtnCss);