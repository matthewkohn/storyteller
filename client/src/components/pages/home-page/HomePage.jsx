import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GenreContext } from '../../../context/GenreContext';
import StoryControlPanel from './StoryControlPanel';
import StoryCard from './StoryCard';
import { dashboardCss, newStoryBtnCss, storyCardContainerCss, noStoriesTextCss, controlSectionCss, storiesSectionCss } from '../../../styles/homePageCss';
import { UserContext } from '../../../context/UserContext';

const HomePage = () => {
  const [isGenreChecked, setIsGenreChecked] = useState(false);
  const [isSortedByAll, setIsSortedByAll] = useState(true);
  const [radioValue, setRadioValue] = useState('all');
  const [allStories, setAllStories] = useState([]);
  const [noStories, setNoStories] = useState(false);
  const [url, setUrl] = useState('/stories');
  const [expanded, setExpanded] = useState(null);
  const { chosenGenre } = useContext(GenreContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    const value = e.target.value;
    setRadioValue(value);
    if (value !== 'all') {
      setIsSortedByAll(false) 
    } else if (value === 'all') {
      setIsSortedByAll(true);
    }
  }

  const handleCheckbox = (e) => {
    setIsGenreChecked(e.target.checked)
  }

  // tracks button clicks & sets urls
  useEffect(() => {
    if (!isSortedByAll) {
      setUrl(`/stories-by-user`);
    } else if (isSortedByAll && isGenreChecked && chosenGenre.id) {
      setUrl(`/stories-by-genre/${chosenGenre.id}`);
    } else {
      setUrl(`/stories`);
    }
  }, [chosenGenre, isGenreChecked, isSortedByAll])

  // sets stories
  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((stories) => {
        if (stories.length > 0) {
          setNoStories(false);
          // console.log(stories)
          setAllStories(stories);
        } else {
          setNoStories(true);
        }
      })
    })
  }, [url])

  const handleExpand = (storyId) => {
    if (expanded !== storyId) {
      setExpanded(storyId);
    } else {
      setExpanded(null);
    }
  }

  const storyCardsList = allStories.map((story) => (
      <StoryCard 
        expanded={ expanded }
        handleExpand={ handleExpand }
        key={ story.id } 
        story={ story } 
      />
  ))

  return (
    <Dashboard>
      <ControlSection>
        <Typography>Welcome to Storyteller, {user.username}!</Typography>
        <Typography variant="subtitle" >Choose a story from the Bookshelf, and pick up where the previous author left off. Or, being writing a new one to share with other authors.</Typography>
        <NewStoryBtn 
          variant="contained"
          onClick={ () => navigate('/story/new') } 
          >
          Create a New Story Here
        </NewStoryBtn>
        <StoryControlPanel
          isDisabled={ !isGenreChecked || !isSortedByAll }
          isAllChecked={ isSortedByAll }
          onCheckboxClick={ handleCheckbox }
          onRadioChange={ handleChange }
          radioValue={ radioValue }
        />


      </ControlSection>
      <StoriesSection>
        <Typography variant="h3">BOOKSHELF</Typography>
        <Typography variant="body1">All Stories, All Genres</Typography>
        <StoryCardContainer>
          { noStories ? <NoStories variant="h2">No stories yet</NoStories> : storyCardsList }
        </StoryCardContainer>
      </StoriesSection>
    </Dashboard>
  )
}

export default HomePage

const Dashboard = styled(Container)(dashboardCss);
const ControlSection = styled(Box)(controlSectionCss);
const StoriesSection = styled(Box)(storiesSectionCss);
const StoryCardContainer = styled(Container)(storyCardContainerCss);
const NewStoryBtn = styled(Button)(newStoryBtnCss);
const NoStories = styled(Typography)(noStoriesTextCss);