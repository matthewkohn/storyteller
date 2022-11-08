import React, { useEffect, useState } from 'react'
import { Card, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { storyCardCardContainerCss } from '../../../styles/main/dashboardCss';

const StoryCard = ({ story, mode }) => {
  const { id, title } = story;
  const navigate = useNavigate();
  const [navEndpoint, setNavEndpoint] = useState('');

  useEffect(() => {
    if (mode === 'edit') {
      setNavEndpoint(`/story/${id}/edit`)
    } else {
      setNavEndpoint(`/story/${id}`)
    }
  }, [mode, id])

  return (
    <CardContainer 
      onClick={ () => navigate(navEndpoint, { state: id })}
    >
      <Typography variant="body1">{ title }</Typography>
    </CardContainer>
  )
}

export default StoryCard

const CardContainer = styled(Card)(storyCardCardContainerCss)