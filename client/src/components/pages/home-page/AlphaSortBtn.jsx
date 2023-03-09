import React from 'react';
import { Button } from '@mui/material';

const sortType = 'alpha-sort';

const AlphaSortBtn = ({ disabled, isSorted, onClickAlphaSort }) => {

  const styleToggle = (theme) => 
    isSorted ? 
  {
    background: `${theme.palette.primary.dark}`, 
    color: `${theme.palette.primary.light}`,
    fontSize: '1.1rem'
  } 
  : 
  {
    background: `${theme.palette.primary.light}`
  }

  return (
    <>
      <Button 
        variant="contained"
        disabled={ disabled }
        onClick={ (e) => onClickAlphaSort(e, sortType) }
        sx={ styleToggle }
      >
        Sort A-Z
      </Button>
    </>
  )
}

export default AlphaSortBtn

