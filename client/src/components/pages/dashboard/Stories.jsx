import React, { useContext, useEffect, useState } from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import { handleGET } from '../../../helpers/fetchRequests';
import { GenreContext } from '../../../context/GenreContext';
import { AuthorContext } from '../../../context/AuthorContext';
import StoriesHeader from './StoriesHeader';
import StoryCard from './StoryCard';


const Stories = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [radioValue, setRadioValue] = useState('all');
  const [allStories, setAllStories] = useState([]);
  const [url, setUrl] = useState('/stories');
  const { chosenGenre } = useContext(GenreContext);
  const [currentAuthor] = useContext(AuthorContext);
  
  const handleChange = (e) => {
    const value = e.target.value;
    value === 'all' ? setIsDisabled(true) : setIsDisabled(false);
    setRadioValue(value);
  }

  useEffect(() => {
    isDisabled || chosenGenre.id === null ? setUrl('/stories') : setUrl(`/genres/${chosenGenre.id}`)
  }, [chosenGenre, isDisabled])

  useEffect(() => {
    handleGET(url).then((stories) => setAllStories(stories))
  }, [url])

  const storyCardsList = allStories.map((story) => (
      <StoryCard key={story.id} story={story} />
  ))

  return (
    <StoriesBox>
      <Typography variant="h4">Book Shelf</Typography>
      <StoriesHeader
        isDisabled={ isDisabled }
        onRadioChange={ handleChange }
        radioValue={ radioValue }
      />
      <Typography variant="body1">Click on a story title to contribute as "{ currentAuthor.name }"</Typography>
      <StoryCardContainer>
        { storyCardsList }
      </StoryCardContainer>
    </StoriesBox>
  )
}

export default Stories

const StoriesBox = styled(Box)({
  // border: '1px solid green',
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: '75vw',
  height: '75vh',
})

const StoryCardContainer = styled(Container)({
  height: '70vh',
  overflowY: 'scroll',
})