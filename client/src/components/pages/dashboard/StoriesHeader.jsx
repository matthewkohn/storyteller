import React from 'react'
import { Box, Checkbox, Container, FormControl, FormControlLabel, Radio, RadioGroup, styled, Typography  } from '@mui/material';
import GenresDropdown from '../../forms/GenresDropdown';

const StoriesHeader = ({ isDisabled, isAllChecked, onCheckboxClick, onRadioChange, radioValue }) => {

  return (
    <>
      <HeaderBox elevation={3}>
        <RadioFormControl>
          <RadioLabel variant="h6">Sort By: </RadioLabel>
          <StyledRadioGroup 
            row
            defafultvalue="all"
            value={ radioValue }
            onChange={ onRadioChange }
          >
            <FormControlLabel 
              value="all" 
              control={ <Radio /> } 
              label="All"
              labelPlacement='start' 
            />
            <FormControlLabel 
              value="author" 
              control={ <Radio /> } 
              label="Pen Name" 
              labelPlacement='start'
            />
          </StyledRadioGroup>
          <GenreBox>
            <FormControlLabel
              label="Genres: "
              labelPlacement='end'
              control={
                <Checkbox 
                  value="by-genre" 
                  disabled={ !isAllChecked } 
                  onChange={ onCheckboxClick }
                />
              }
              />
            <GenresDropdown isDisabled={ isDisabled } />
          </GenreBox>
        </RadioFormControl>
      </HeaderBox>
    </>
  )
}

export default StoriesHeader


const HeaderBox = styled(Box)(({ theme }) => `
  display: flex;
  justify-content: space-between;
  background: ${theme.palette.secondary.light};
  padding: 5px;
  border-radius: 35px;
  border: 2px solid ${theme.palette.secondary.dark};
`
)

const RadioFormControl = styled(FormControl)({
  display: 'inherit',
  flexDirection: 'row',
  alignItems: 'space-between',
  width: '100%',
})

const StyledRadioGroup = styled(RadioGroup)({
  display: 'inherit',
  flexDirection: 'column',
  width: '40%',
})

const RadioLabel = styled(Typography)({
  display: 'inherit',
  alignItems: 'center',
  padding: '10px',
  marginRight: '30px',
  width: '20%',
})

const GenreBox = styled(Container)({
  display: 'inherit',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
})