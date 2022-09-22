import React from 'react';
import { Box, FormControl, styled, TextField, Typography } from '@mui/material';
import { primaryItemsCss } from '../../styles/start/newUserCss';
import GenresDropdown from './GenresDropdown';


const IntroForm = ({ penName, onInputChange }) => {

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
          <GenresDropdown isDisabled={ false }/>
        </PrimaryItems>
      </FormControl>
    </>
  )
}

export default IntroForm

const PrimaryItems = styled(Box)(primaryItemsCss);
