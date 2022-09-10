import React, { useEffect, useState } from 'react';
import { Box, FormControl, MenuItem, Select, styled, TextField, Typography } from '@mui/material';
import { primaryItemsCss } from '../../styles/start/newUserCss';

const IntroForm = ({ required, onGenreSelect, onInputChange }) => {
  const [allGenres, setAllGenres] = useState([]);
  
  useEffect(() => {
    fetch('/genres', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true
      },
    })
    .then((res) => res.json())
    .then((data) => setAllGenres(data))
    // eslint-disable-next-line
  }, [])

  const { penName, genre } = required;
  console.log("allGenres from IntroForm: ", typeof allGenres, allGenres);

  const genresList = allGenres.map((gen) => (
    <MenuItem 
      key={ gen.id } 
      name={ gen.name }
      value={ gen.name }
    >
      { gen.name }
    </MenuItem>
  ));

  return (
    <>
      <FormControl fullWidth>
        <PrimaryItems>
          <Typography variant="body1">Your author name:</Typography>
          <TextField 
            autoFocus
            required
            name="penName"
            value={ penName }
            onChange={ (e) => onInputChange(e) }
            label="Pen Name" 
            variant="standard" 
          />
        </PrimaryItems>
        <PrimaryItems>
          <Typography variant='body1'>Choose a fictional genre to start with:</Typography>
          <GenreDropdown 
            required
            autoWidth
            // label="Genres" 
            value={ genre } 
            variant="outlined"
            onChange={ (e) => onGenreSelect(e) } 
          >
            { genresList }   
          </GenreDropdown> 
        </PrimaryItems>
      </FormControl>
    </>
  )
}

export default IntroForm

const PrimaryItems = styled(Box)(primaryItemsCss);
const GenreDropdown = styled(Select)({
  width: '100%',
  maxWidth: '270px',
  margin: '5px',
  height: '50px',
  display: 'inherit',

})