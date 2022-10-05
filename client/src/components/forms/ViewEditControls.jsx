import React, { useState } from 'react'
import { Box, Button, styled, Typography } from '@mui/material';


const ViewEditControls = ({ currentAuthor, chooseMode }) => {
  const [isSelected, setIsSelected] = useState(true)

  const handleClick = () => {
    setIsSelected(!isSelected)
    if (isSelected) {
      chooseMode('edit')
    } else {
      chooseMode('view')
    }
  }

  return (
    <>
    <ControlBox>
        <ModeButton
          variant={ isSelected ? "contained" : "outlined" }
          onClick={ handleClick }
        >
          View Mode
        </ModeButton>
        <ModeButton
          variant={ isSelected ? "outlined" : "contained" }
          onClick={ handleClick }
        >
          <Typography variant="button">Update Mode</Typography>
          <Typography variant="button">with "{ currentAuthor.name }"</Typography>
        </ModeButton>
      </ControlBox>
    </>
  )
}

export default ViewEditControls


const ControlBox = styled(Box)({
  display: 'flex',
  margin: '10px 0',
  justifyContent: 'space-between',
  width: '100%',
})

const ModeButton = styled(Button)(({ theme }) => `
  width: 50%;
  display: inherit;
  flex-direction: column;
`)