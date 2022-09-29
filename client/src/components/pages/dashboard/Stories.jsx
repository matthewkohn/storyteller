import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, styled, Typography } from '@mui/material';
import { handleGET } from '../../../helpers/fetchRequests'
import StoryCard from './StoryCard';
import StoriesHeader from './StoriesHeader';
import { GenreContext } from '../../../context/GenreContext';


const Stories = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [radioValue, setRadioValue] = useState('all');
  const [allStories, setAllStories] = useState([]);
  const { chosenGenre } = useContext(GenreContext)
  console.log("Chosen genre id: ", chosenGenre.id)

  const handleChange = (e) => {
    setRadioValue(e.target.value);
    radioValue === 'all' ? setIsDisabled(false) : setIsDisabled(true)
  }
// GET STORIES from API ('all' and filtered by Genre) TO MAKE STORYCARDS SHOWING STORY TITLE & MOST RECENT AUTHOR
// make GET url state and setState('all' || 'by_genre')
// figure out endpoints for sorting stories by genre

  useEffect(() => {
    handleGET('/stories').then((stories) => {
      setAllStories(stories);
      // run stories through isLastAuthor(stories) function 
      // const paragraphs = stories.map((story) => story)
    })
  }, [])
  // genre dropdown that displays filtered stories for that genre
  // maps all stories of a genre as a StoryCard (story title only)
  console.log(allStories)

  return (
    <StoriesBox>
      <Typography variant="h4">Stories</Typography>
      <StoriesHeader
        isDisabled={ isDisabled }
        onRadioChange={ handleChange }
        radioValue={ radioValue }
      />
{/* story cards go here */}

      <StoryCard />
      <Button onClick={ () => navigate('/story/1/edit') } >Contribute</Button>
    </StoriesBox>
  )
}

export default Stories

const StoriesBox = styled(Box)({
  border: '1px solid green',
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: '75vw',
  height: '65vh',
})
