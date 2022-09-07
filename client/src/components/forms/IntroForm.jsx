import React from 'react';
import { Box, Select, styled, TextField, Typography } from '@mui/material';
import { primaryItemsCss } from '../../styles/start/newUserCss';


const IntroForm = ({ required, onInputChange }) => {
  const { penName, genre } = required;

  return (
    <>
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
        <Select 
          // required
          label="Genres" 
          value={ genre } 
          onChange={ (e) => onInputChange(e) } 
        >
          {/* { genresList }    */}
        </Select> 
      </PrimaryItems>
    </>
  )
}

export default IntroForm

const PrimaryItems = styled(Box)(primaryItemsCss);