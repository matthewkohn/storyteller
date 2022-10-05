import React from 'react';
import { Card, styled, Typography } from '@mui/material';
import { headerCss, introCardCss, sectionCss } from '../../../../styles/login/introCss';


const Instructions = () => {
  return (
    <IntroCard>
      <Header variant="h3">How does Storyteller work?</Header>
      <Header variant="body1">New to Storyteller? To get started...</Header>
      <ol>
        <li>
          <Section variant="body1">Create a free account, or Log In.</Section>
          
        </li>
        <li>
          <Section variant="body1">Explore <strong>Storyteller's</strong> stories.</Section>
        </li>
        <li>
          <Section variant="body1">Create new stories! Choose your "Pen Name", then decide on a story title and it's genre. Then, start writing.</Section>
        </li>
        <li>
          <Section variant="body1">Contribute to any story, under any pen name you choose.</Section>
        </li>
      </ol>
    </IntroCard>
  )
}

export default Instructions

// Styled components
const IntroCard = styled(Card)(introCardCss)

const Header = styled(Typography)(headerCss)

const Section = styled(Typography)(sectionCss)
