import React from 'react'
import { Button, ButtonGroup, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { styledButtonGroupCss } from '../../styles/main/mainCss'

const AccordionButtons = ({ message }) => {
  const navigate = useNavigate();

  return (
    <StyledButtonGroup>
      <Button
        variant="contained"
        onClick={ () => navigate(`/story/${message.id}`, { state: message }) }
      >
        Read
      </Button>
      <Button
        variant="contained"
        onClick={ () => navigate(`/story/${message.id}/edit`, { state: message })}
      >
        Contribute
      </Button>
    </StyledButtonGroup>
  )
}

export default AccordionButtons

const StyledButtonGroup = styled(ButtonGroup)(styledButtonGroupCss);