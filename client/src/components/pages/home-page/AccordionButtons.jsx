import React from 'react';
import { Button, ButtonGroup, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styledButtonGroupCss } from '../../../styles/home/mainCss';

const AccordionButtons = ({ message }) => {
  const navigate = useNavigate();

  const handleReadClick = () => {
    navigate(`/story/${message.id}`, { state: message });
  };
  
  const handleContributeClick = () => {
    navigate(`/story/${message.id}/edit`, { state: message });
  };

  return (
    <StyledButtonGroup>
      <Button variant="contained" onClick={ handleReadClick } >
        Read
      </Button>
      <Button variant="contained" onClick={ handleContributeClick } >
        Contribute
      </Button>
    </StyledButtonGroup>
  );
};

export default AccordionButtons;

const StyledButtonGroup = styled(ButtonGroup)(styledButtonGroupCss);