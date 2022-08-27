import React from 'react';
import { Container, styled } from '@mui/material';
import { backgroundContainerCss } from '../../../styles/login/loginCss';
import IntroBox from './intro-side/IntroBox';
import FormBox from './form-side/FormBox';

const Landing = () => {
  return (
    <BackgroundContainer maxWidth='xl' disableGutters>
      <LandingContainer>
        <IntroBox />
        <FormBox />

      </LandingContainer>
    </BackgroundContainer>
  )
}

export default Landing

// Styled components
const BackgroundContainer = styled(Container)(backgroundContainerCss);

const LandingContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  height: '100%'
})