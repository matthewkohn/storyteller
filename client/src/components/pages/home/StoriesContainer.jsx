import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GenreContext } from '../../../context/GenreContext';
import { AuthorContext } from '../../../context/AuthorContext';
import StoryControlPanel from './StoryControlPanel';
import StoryCard from './StoryCard';
import { newStoryBtnCss, storiesBoxCss, storyCardContainerCss } from '../../../styles/main/mainCss';

const StoriesContainer = () => {
  const [isGenreChecked, setIsGenreChecked] = useState(false);
  const [isSortedByAll, setIsSortedByAll] = useState(true);
  const [radioValue, setRadioValue] = useState('all');
  const [allStories, setAllStories] = useState([]);
  const [url, setUrl] = useState('/stories');
  const [hideStories, setHideStories] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const { chosenGenre } = useContext(GenreContext);
  const [currentAuthor] = useContext(AuthorContext);
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
      setUrl(`/stories-by-author/${currentAuthor.id}`)
    // "All" and "Genres" are checked, and a genre is selected:
    } else if (isSortedByAll && isGenreChecked && chosenGenre.id) {
      setUrl(`/stories-by-genre/${chosenGenre.id}`)
    } else {
      setUrl(`/stories`)
    }
  }, [chosenGenre, currentAuthor, isGenreChecked, isSortedByAll])

  // useEffect that sets stories
  useEffect(() => {
    fetch(url).then((res) => {
      if (res.ok) {
        res.json().then((stories) => {
          setAllStories(stories);
          setHideStories(false);
        })
      } else {
        setHideStories(true);
      }
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
      <Typography variant="h4">Book Shelf</Typography>
      <NewStoryBtn 
        variant="contained"
        onClick={ () => navigate('/story/new') } 
      >
        Create a New Story
      </NewStoryBtn>
      <StoryControlPanel
        isDisabled={ !isGenreChecked || !isSortedByAll }
        isAllChecked={ isSortedByAll }
        onCheckboxClick={ handleCheckbox }
        onRadioChange={ handleChange }
        radioValue={ radioValue }
      />
      <StoryCardContainer>
      { 
        hideStories ? 
          <Typography variant="h1">No stories... Yet...</Typography>
        :
          storyCardsList
      }
      </StoryCardContainer>
    </StoriesBox>
  )
}

export default StoriesContainer

const StoriesBox = styled(Box)(storiesBoxCss)
const StoryCardContainer = styled(Container)(storyCardContainerCss)
const NewStoryBtn = styled(Button)(newStoryBtnCss)