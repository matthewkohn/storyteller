import { Container, styled, Typography } from '@mui/material';
import React from 'react';
import { landingFooterCss } from '../../../styles/loginPageCss';

const photoCreditUrl = "https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
const unsplashUrl = "https://unsplash.com/s/photos/academic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";


const LandingFooter = () => {
  return (
    <FooterContainer>
      <Typography variant="caption">
        Background Image Photo by <a href={ photoCreditUrl }>Patrick Tomasso</a> on <a href={ unsplashUrl }>Unsplash</a>
      </Typography>
    </FooterContainer>
  )
}

export default LandingFooter

const FooterContainer = styled(Container)(landingFooterCss);