import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import { backgroundContainerCss, footerCss, footerTagCss, landingContainerCss, mainCss } from '../../../styles/login/landingCss';
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

const BackgroundContainer = styled(Container)(backgroundContainerCss);
const LandingContainer = styled(Container)(landingContainerCss);
const Main = styled(Box)(mainCss);
const Footer = styled(Container)(footerCss);
const FooterTag = styled(Typography)(footerTagCss);