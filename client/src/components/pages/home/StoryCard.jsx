import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, styled, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { storyCardAccordionCss } from '../../../styles/main/dashboardCss';

const StoryCard = ({ handleExpand, expanded, story }) => {
  const { id, title } = story;
  const navigate = useNavigate();

  return (
    <CardContainer
      expanded={ expanded === id } 
      onChange={ () => handleExpand(id) }
    >
      <AccordionSummary>
        <Typography variant="body1">{ title }</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Button
          variant="contained"
          onClick={ () => navigate(`/story/${id}`, { state: id }) }
        >
          Read
        </Button>
        <Button
          variant="contained"
          onClick={ () => navigate(`/story/${id}/edit`, { state: id })}
        >
          Contribute
        </Button>
      </AccordionDetails>
    </CardContainer>
  )
}

export default StoryCard

const CardContainer = styled(Accordion)(storyCardAccordionCss)

