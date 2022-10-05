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

const CardContainer = styled(Card)(({ theme }) => `
  margin: 5px 0;
  padding: 2px;
  height: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-top: 5px solid brown;
  border-bottom: 5px solid brown;
  :hover {
    background: ${theme.palette.primary.dark};
    color: ${theme.palette.primary.light};
  }
`)