import React from 'react'
import { Box, Checkbox, Container, FormControl, FormControlLabel, Radio, RadioGroup, styled, Typography  } from '@mui/material';
import GenresDropdown from '../../forms/GenresDropdown';
import { genreBoxCss, headerBoxCss, radioControlFormCss, radioLabelCss, styledRadioGroupCss } from '../../../styles/main/dashboardCss';

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


const HeaderBox = styled(Box)(headerBoxCss)
const RadioFormControl = styled(FormControl)(radioControlFormCss)
const StyledRadioGroup = styled(RadioGroup)(styledRadioGroupCss)
const RadioLabel = styled(Typography)(radioLabelCss)
const GenreBox = styled(Container)(genreBoxCss)