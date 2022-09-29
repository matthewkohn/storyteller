import React from 'react'
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, styled, Typography  } from '@mui/material';
import GenresDropdown from '../../forms/GenresDropdown';

const StoriesHeader = ({ isDisabled, onRadioChange, radioValue }) => {

  return (
    <>
      <HeaderBox>
        <RadioFormControl>
          <RadioLabel variant="h6">View: </RadioLabel>
          <RadioGroup 
            row
            defafultvalue="all"
            value={ radioValue }
            onChange={ onRadioChange }
          >
            <FormControlLabel 
              value="all" 
              control={ <Radio /> } 
              label="All" 
            />
            <FormControlLabel 
              value="by-genre" 
              control={ <Radio /> } 
              label="By Genre" 
            />
          </RadioGroup>
          <GenresDropdown isDisabled={ isDisabled }/>
        </RadioFormControl>
      </HeaderBox>
    </>
  )
}

export default StoriesHeader


const HeaderBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})

const RadioFormControl = styled(FormControl)({
  display: 'inherit',
  flexDirection: 'row',
})

const RadioLabel = styled(Typography)({
  display: 'inherit',
  alignItems: 'center',
  padding: '10px',
})