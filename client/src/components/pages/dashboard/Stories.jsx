import React, { useContext, useEffect, useState } from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import { GenreContext } from '../../../context/GenreContext';
import { AuthorContext } from '../../../context/AuthorContext';
import StoriesHeader from './StoriesHeader';
import StoryCard from './StoryCard';
import ViewEditControls from '../../forms/ViewEditControls';

const Stories = () => {
  const [isGenreChecked, setIsGenreChecked] = useState(false);
  const [isSortedByAll, setIsSortedByAll] = useState(true);
  const [radioValue, setRadioValue] = useState('all');
  const [allStories, setAllStories] = useState([]);
  const [url, setUrl] = useState('/stories');
  const [hideStories, setHideStories] = useState(false);
  const [mode, setMode] = useState('view');
  const { chosenGenre } = useContext(GenreContext);
  const [currentAuthor] = useContext(AuthorContext);
  
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target.checked)
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

  const storyCardsList = allStories.map((story) => (
      <StoryCard 
        key={ story.id } 
        story={ story } 
        mode={ mode } 
      />
  ))

  return (
    <StoriesBox>
      <Typography variant="h4">Book Shelf</Typography>
      <StoriesHeader
        isDisabled={ !isGenreChecked || !isSortedByAll }
        isAllChecked={ isSortedByAll }
        onCheckboxClick={ handleCheckbox }
        onRadioChange={ handleChange }
        radioValue={ radioValue }
      />
      <ViewEditControls
        currentAuthor={ currentAuthor }
        chooseMode={ setMode }
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

export default Stories

const StoriesBox = styled(Box)({
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: '75vw',
  height: '75vh',
})

const StoryCardContainer = styled(Container)({
  height: '60vh',
  overflowY: 'scroll',
})
