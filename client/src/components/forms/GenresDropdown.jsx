import React, { useContext } from 'react';
import { MenuItem, Select, styled } from '@mui/material';
import { GenreContext } from '../../context/GenreContext';

const GenresDropdown = ({ isDisabled }) => {
  const { chosenGenre, genresList, handleGenreSelection } = useContext(GenreContext);

  console.log("chosenGenre from GenresDropdown: ", chosenGenre)

  return (
    <>
      <Dropdown
        required
        autoWidth
        disabled={ isDisabled }
        displayEmpty
        value={ chosenGenre } 
        variant="outlined"
        onChange={ (e) => handleGenreSelection(e) } 
      >
        <DefaultMenuItem disabled value="">Select a genre</DefaultMenuItem>
        { genresList }
      </Dropdown>
    </>
  )
}

export default GenresDropdown

const Dropdown = styled(Select)({
  width: '100%',
  maxWidth: '250px',
  minWidth: '250px',
  margin: '5px',
  height: '50px',
  display: 'inherit',

})

const DefaultMenuItem = styled(MenuItem)(({ theme }) => `
  color: ${theme.palette.primary.dark};
  background: ${theme.palette.secondary.light};
`)
