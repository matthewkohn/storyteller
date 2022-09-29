import React from 'react'
import { Card, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const StoryCard = ({ story }) => {
  const { id, title } = story;
  const navigate = useNavigate();

  // console.log("Story inside Story Card: ", title)

  // Displays story title, onClick navigates to '/story/:storyId'
  //<Button onClick={ () => navigate('/story/1/edit') } >Contribute</Button>

  return (
    <CardContainer 
      onClick={ () => navigate(`/story/${id}/edit`, { state: id })}
    >
      <Typography variant="body1">{ title }</Typography>
    </CardContainer>
  )
}

export default StoryCard

const CardContainer = styled(Card)({
  margin: '5px 0',
  padding: '2px',
  height: '100px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
})