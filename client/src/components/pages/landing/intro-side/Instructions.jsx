import React from 'react';
import { Card, styled, Typography } from '@mui/material';


const Instructions = () => {
  return (
    <IntroCard>
      <Header variant="h3">How does Storyteller work?</Header>
      <Header variant="body1">New to Storyteller? To get started...</Header>
      <ol>
        <li>
          <Section variant="body1">Create a free account.</Section>
        </li>
        <li>
          <Section variant="body1">Choose your first "Pen Name" to author stories.</Section>
        </li>
        <li>
          <Section variant="body1">Choose your first story's genre.</Section>
        </li>
        <li>
          <Section variant="body1">Tell us a little about your favorite things (optional).</Section>
        </li>
        <li>
          <Section variant="body1">Move on to your first story, and start writing.</Section>
        </li>
        <li>
          <Section variant="body1">Submit your contribution, and wait for someone else to add to what you've written.</Section>
        </li>
        <li>
          <Section variant="body1">Explore and write as many stories as you want, under any pen name, in any genre.</Section>
        </li>
      </ol>
    </IntroCard>
  )
}

export default Instructions

// Styled components
const IntroCard = styled(Card)(({ theme }) => `
  background: ${theme.palette.primary.light};
  color: ${theme.palette.primary.dark};
  padding: 10px 25px;
  border-radius: 20px;
  height: 100%;

`)

const Header = styled(Typography)({
  marginBottom: '20px',
  fontWeight: '700',
})

const Section = styled(Typography)({
  fontSize: '1.2rem',
  margin: '5px 40px 10px'
})