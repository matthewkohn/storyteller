import React, { useEffect, useState } from 'react'
import { Card, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

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

const CardContainer = styled(Card)({
  margin: '5px 0',
  padding: '2px',
  height: '100px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  borderTop: '5px solid brown',
  borderBottom: '5px solid brown',
})