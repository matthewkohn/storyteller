import React from 'react';
import { Card, styled, Typography } from '@mui/material';
import { headerCss, introCardCss, sectionCss } from '../../../../styles/login/introCss';


const Description = () => {
  return (
    <IntroCard>
      <Header variant="h3">What is Storyteller?</Header>
      <Header variant="body1">Storyteller is a turn-based story creator.</Header>
      <ul>
        <li>
          <Section variant="body1">Practice creative writing with Storyteller.</Section>
        </li>
        <li>
          <Section variant="body1">You control the story, one paragraph at a time... until you don't!</Section>
        </li>
        <li>
          <Section variant="body1">Choose a story, or begin a new story, under any Pen Name and genre you want.</Section>
        </li>
        <li>
          <Section variant="body1">Once you contribute to a story, you lose control of the story until another author adds to it.</Section>
        </li>
        <li>
          <Section variant="body1">In the meantime, have fun exploring and writing for other stories.</Section>
        </li>
      </ul>
      
    </IntroCard>
  )
}

export default Description

// Styled components
const IntroCard = styled(Card)(introCardCss)

const Header = styled(Typography)(headerCss)

const Section = styled(Typography)(sectionCss)