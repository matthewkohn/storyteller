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
          <Section variant="body1">Have fun reading and writing stories in a variety of genres.</Section>
        </li>
        <li>
          <Section variant="body1">Practice creative writing, and explore your imagination.</Section>
        </li>
        <li>
          <Section variant="body1">You control the story, one paragraph at a time.</Section>
        </li>
        <li>
          <Section variant="body1">Choose a story, or begin a new story, under any Pen Name and genre you want. Then, start writing!</Section>
        </li>
      </ul>
    </IntroCard>
  )
}

export default Description

const IntroCard = styled(Card)(introCardCss)
const Header = styled(Typography)(headerCss)
const Section = styled(Typography)(sectionCss)