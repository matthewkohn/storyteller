import { Button } from '@mui/material'
import React from 'react'

const AlphaSortBtn = ({ onClickAlphaSort }) => {


  const handleClick = () => {
    // trigger function to sort current bookshelfStories A-Z
  }

  return (
    <>
      <Button 
        variant="contained"
        onClick={ handleClick }
      >
        Sort A-Z
      </Button>
    </>
  )
}

export default AlphaSortBtn