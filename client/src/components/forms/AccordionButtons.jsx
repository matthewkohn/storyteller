import React from 'react'
import { Button, ButtonGroup, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { styledButtonGroupCss } from '../../styles/main/mainCss'

const AccordionButtons = ({ id }) => {
  const navigate = useNavigate();

  return (
    <StyledButtonGroup>
      <Button
        variant="contained"
        onClick={ () => navigate(`/story/${id}`, { state: id }) }
      >
        Read
      </Button>
      <Button
        variant="contained"
        onClick={ () => navigate(`/story/${id}/edit`, { state: id })}
      >
        Contribute
      </Button>
    </StyledButtonGroup>
  )
}

export default AccordionButtons

const StyledButtonGroup = styled(ButtonGroup)(styledButtonGroupCss)