import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import GenresDropdown from '../../forms/GenresDropdown'
import StoryCard from './StoryCard'

const Stories = () => {

  // genre dropdown that displays filtered stories for that genre
  // maps all stories of a genre as a StoryCard (story title only)
  // Nav Link to Dashboard, logout

  return (
    <StoriesBox>
      <Typography variant="h4">Stories</Typography>
      <GenresDropdown />
      <StoryCard />
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