import React, { useContext, useEffect } from 'react';
import { MenuItem, Select, styled } from '@mui/material';
import { handleGET } from "../../helpers/fetchRequests";
import { GenreContext } from '../../context/GenreContext';

const GenresDropdown = ({ isDisabled }) => {
  const { allGenres, setAllGenres, chosenGenre, setChosenGenre } = useContext(GenreContext);

  useEffect(() => {
    handleGET('/genres').then((data) => setAllGenres(data));
    // eslint-disable-next-line
  }, [])

  const handleGenreSelection = (e) => {
    const choice = allGenres.find((g) => g.name === e.target.value)
    setChosenGenre(choice)
  }

  const genresList = Array.from(allGenres).map((gen) => (
    <MenuItem 
      key={ gen.id } 
      name={ gen.name }
      value={ gen.name }
      divider
    >
      { gen.name }
    </MenuItem>
  ))

  return (
    <>
      <Dropdown
        required
        autoWidth
        disabled={ isDisabled }
        displayEmpty
        value={ chosenGenre.name } 
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
