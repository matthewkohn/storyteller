import React, { useState } from 'react';
import { Button, Container, styled } from '@mui/material';
import Description from './Description';
import Instructions from './Instructions';
import { introContainerCss, introToggleBtnCss } from '../../../../styles/login/introCss';

const IntroBox = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <IntroContainer maxWidth='lg' >
      <IntroToggleBtn 
        variant="outlined" 
        onClick={ () => setShowInstructions(!showInstructions) } 
      >
        { showInstructions ? "What is it?" : "Learn More" }
      </IntroToggleBtn>
      { 
        showInstructions ? 
          <Instructions /> 
        : 
          <Description /> 
      }
    </IntroContainer>
  )
}

export default IntroBox

// Styled components
const IntroContainer = styled(Container)(introContainerCss)
const IntroToggleBtn = styled(Button)(introToggleBtnCss)