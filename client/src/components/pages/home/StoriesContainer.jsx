import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GenreContext } from '../../../context/GenreContext';
import { UserContext } from '../../../context/UserContext';
import StoryControlPanel from './StoryControlPanel';
import StoryCard from './StoryCard';
import { newStoryBtnCss, storiesBoxCss, storiesHeaderCss, storyCardContainerCss, storyTitleCss, noStoriesTextCss } from '../../../styles/main/mainCss';

const StoriesContainer = () => {
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

  // useEffect that tracks button clicks & sets urls
  useEffect(() => {
    if (!isSortedByAll) {
      setUrl(`/stories-by-user`);
    } else if (isSortedByAll && isGenreChecked && chosenGenre.id) {
      setUrl(`/stories-by-genre/${chosenGenre.id}`);
    } else {
      setUrl(`/stories`);
    }
  }, [chosenGenre, isGenreChecked, isSortedByAll])

  // useEffect that sets stories
  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((stories) => {
        if (stories.length > 0) {
          setNoStories(false);
          console.log(stories)
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
    <StoriesBox>
      <StoriesHeader>
        <Title>
          <Box>
            <Typography variant="h2">
              The Book Shelf
            </Typography>
            <Typography variant="subtitle">
              Hello, {user.username}! Choose a story to contribute to, or tell a brand new story.
            </Typography>
          </Box>
          <StoryControlPanel
            isDisabled={ !isGenreChecked || !isSortedByAll }
            isAllChecked={ isSortedByAll }
            onCheckboxClick={ handleCheckbox }
            onRadioChange={ handleChange }
            radioValue={ radioValue }
          />
        </Title>
        <NewStoryBtn 
          variant="contained"
          onClick={ () => navigate('/story/new') } 
        >
          Create a New Story
        </NewStoryBtn>
      </StoriesHeader>
      <StoryCardContainer>
        { noStories 
          ? 
            <NoStories variant="h2">No stories yet</NoStories>
          :
            storyCardsList 
        }
      </StoryCardContainer>
    </StoriesBox>
  )
}

export default StoriesContainer

const StoriesBox = styled(Box)(storiesBoxCss);
const StoriesHeader = styled(Container)(storiesHeaderCss);
const Title = styled(Box)(storyTitleCss)
const StoryCardContainer = styled(Container)(storyCardContainerCss)
const NewStoryBtn = styled(Button)(newStoryBtnCss)
const NoStories = styled(Typography)(noStoriesTextCss)