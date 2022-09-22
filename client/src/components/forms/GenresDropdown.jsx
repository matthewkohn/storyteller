import React, { useContext } from 'react'
import { MenuItem, Select, styled } from '@mui/material'
import { GenreContext } from '../../context/GenreContext';
// import { useState } from 'react';

const GenresDropdown = () => {
  const { chosenGenre, genresList, handleGenreSelection } = useContext(GenreContext);

  console.log("chosenGenre from GenresDropdown: ", chosenGenre)
  return (
    <>
      <Dropdown
        required
        autoWidth
        displayEmpty
        // label="Genres" 
        value={ chosenGenre } 
        variant="outlined"
        onChange={ (e) => handleGenreSelection(e) } 
      >
        <DefaultMenuItem value="">Choose a genre</DefaultMenuItem>
        { genresList }

      </Dropdown>
    </>
  )
}

export default GenresDropdown

const Dropdown = styled(Select)({
  width: '100%',
  maxWidth: '270px',
  margin: '5px',
  height: '50px',
  display: 'inherit',

})

const DefaultMenuItem = styled(MenuItem)(({ theme }) => `
  color: ${theme.palette.primary.main};
`)
