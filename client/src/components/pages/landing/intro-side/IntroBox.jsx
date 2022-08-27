import React, { useState } from 'react';
import { Button, Container, styled } from '@mui/material';
import Description from './Description';
import Instructions from './Instructions';

const IntroBox = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <IntroContainer maxWidth='lg' >
      <IntroToggleBtn variant="outlined" onClick={ () => setShowInstructions(!showInstructions) } >
        { showInstructions ? "Noun" : "Verb" }
      </IntroToggleBtn>
      
      { showInstructions ? <Instructions /> : <Description /> }

    </IntroContainer>
  )
}

export default IntroBox

// Styled components
const IntroContainer = styled(Container)({
  border: '1px solid red',
  margin: '10vh auto 10vh',
  minHeight: '80vh',
  maxWidth: '50vw',
  height: '100',
  width: '50%',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between',
  justifyItems: 'center',
  // padding: '30px',
})

const IntroToggleBtn = styled(Button)(({ theme }) => `
  color: ${theme.palette.primary.dark};
  background: ${theme.palette.secondary.light};
  font-weight: 700;
  border-radius: 20px;
  width: 50%;
  margin: 0 auto 10px;
  :hover {
    
  }
`)