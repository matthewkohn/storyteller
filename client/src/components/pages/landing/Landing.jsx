import React from 'react';
import { Container, styled, Typography } from '@mui/material';
import { backgroundContainerCss, landingContainerCss } from '../../../styles/login/landingCss';
import IntroBox from './intro-side/IntroBox';
import LoginBox from './login-side/LoginBox';

const Landing = () => {
  return (
    <BackgroundContainer maxWidth='xl' disableGutters>
      <LandingContainer>
        <Main>
          <IntroBox />
          <LoginBox />
        </Main>
        <Footer>
          <FooterTag variant="caption">
            Background Image Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/academic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </FooterTag>
        </Footer>
      </LandingContainer>
    </BackgroundContainer>
  )
}

export default Landing

// Styled components
const BackgroundContainer = styled(Container)(backgroundContainerCss);

const LandingContainer = styled(Container)(landingContainerCss)

const Main = styled(Container)({
  display: 'inherit',
})

const Footer = styled(Container)({
  display: 'inherit',
  justifyContent: 'flex-end',
  fontStyle: 'italic',
  position: 'absolute',
  bottom: '10px',
})

const FooterTag = styled(Typography)({
  opacity: '0.7',
})