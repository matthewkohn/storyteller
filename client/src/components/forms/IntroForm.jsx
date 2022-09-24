import React from 'react';
import { Box, FormControl, styled, TextField } from '@mui/material';
import { primaryItemsCss } from '../../styles/start/newUserCss';
import GenresDropdown from './GenresDropdown';

// DELETE ME


const IntroForm = ({ penName, onInputChange }) => {

  return (
    <>
      <FormControl fullWidth>
        <PrimaryItems>

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

          <GenresDropdown isDisabled={ false }/>
        </PrimaryItems>
      </FormControl>
    </>
  )
}

export default IntroForm

const PrimaryItems = styled(Box)(primaryItemsCss);
