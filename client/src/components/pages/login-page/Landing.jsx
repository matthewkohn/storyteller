import React from 'react';
import { Container, styled, Typography } from '@mui/material';
import { backgroundContainerCss, foregroundContainerCss,landingTitleCss, landingSubtitleCss } from '../../../styles/loginPageCss';
import Login from './Login';
import LandingFooter from './LandingFooter';

const Landing = () => {
  return (
    <BackgroundContainer maxWidth='xl' disableGutters>
      <ForegroundContainer>
        <Title variant="h1">Storyteller</Title>
        <Subtitle variant="h2">Turn-Based Fictional Story Writing</Subtitle>
        <Login />
        <LandingFooter />
      </ForegroundContainer>
    </BackgroundContainer>
  );
};

export default Landing;

const BackgroundContainer = styled(Container)(backgroundContainerCss);
const ForegroundContainer = styled(Container)(foregroundContainerCss);
const Title = styled(Typography)(landingTitleCss);
const Subtitle = styled(Typography)(landingSubtitleCss);