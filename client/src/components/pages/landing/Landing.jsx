import React from 'react';
import { Container, styled } from '@mui/material';
import { backgroundContainerCss, landingContainerCss } from '../../../styles/login/landingCss';
import IntroBox from './intro-side/IntroBox';
import LoginBox from './login-side/LoginBox';

const Landing = () => {
  return (
    <BackgroundContainer maxWidth='xl' disableGutters>
      <LandingContainer>
        <IntroBox />
        <LoginBox />

      </LandingContainer>
    </BackgroundContainer>
  )
}

export default Landing

// Styled components
const BackgroundContainer = styled(Container)(backgroundContainerCss);

const LandingContainer = styled(Container)(landingContainerCss)