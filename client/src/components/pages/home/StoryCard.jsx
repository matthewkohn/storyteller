import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, styled, Typography, Container, ListItem } from '@mui/material';
import { detailsCss, storyCardAccordionCss, accordionSummaryCss, summaryContainerCss } from '../../../styles/main/mainCss';
import AccordionButtons from '../../navigation/AccordionButtons';

const StoryCard = ({ handleExpand, expanded, story }) => {
  const { id, title, genre_category, author_summary, updated_at } = story;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric' };
  const updatedAt = new Date(updated_at).toLocaleDateString('en-US', options);
  const message = {
    id: id,
    title: title,
    genre: genre_category
  }

  // console.log("Message from StoryCard: ", message)
  // console.log(story)

  return (
    <CardContainer
      expanded={ expanded === id } 
      onChange={ () => handleExpand(id) }
    >
      <StyledAccordionSummary>
        <SummaryContainer>
          <Typography variant="body1">{ title }</Typography>
          <Typography variant="body2">{ genre_category }</Typography>
        </SummaryContainer>
      </StyledAccordionSummary>
      <hr/>
      <Details>
        <Typography variant="body2">Authors:</Typography>
        { author_summary.length > 0 
          ?
          author_summary.map((author) => (
            <ListItem key={author}>{author}</ListItem>
          ))
          :
          <Typography variant="body2">None yet</Typography>
        }
        <AccordionButtons
          message={ message }
        />
        <Typography variant="body2">
          Last updated on: { updatedAt }
        </Typography>
      </Details>
    </CardContainer>
  )
}

export default StoryCard

const CardContainer = styled(Accordion)(storyCardAccordionCss);
const StyledAccordionSummary = styled(AccordionSummary)(accordionSummaryCss);
const SummaryContainer = styled(Container)(summaryContainerCss);
const Details = styled(AccordionDetails)(detailsCss);
