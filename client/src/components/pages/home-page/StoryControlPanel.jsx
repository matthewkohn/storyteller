import React from 'react';
import { Box, Checkbox, Container, FormControl, FormControlLabel, Radio, RadioGroup, styled } from '@mui/material';
import GenresDropdown from '../../forms/GenresDropdown';
import { controlBoxCss, genreBoxCss } from '../../../styles/home/storyControlPanelCss';
import { styledRadioGroupCss } from '../../../styles/home/storyControlPanelCss';

const StoryControlPanel = ({ isDisabled, isAllChecked, onCheckboxClick, onRadioChange, radioValue }) => {

  return (
    <>
      <ControlBox elevation={3}>
        <FormControl>
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
              value="self" 
              control={ <Radio /> } 
              label="My Stories" 
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
        </FormControl>
      </ControlBox>
    </>
  )
}

export default StoryControlPanel


const ControlBox = styled(Box)(controlBoxCss);
const StyledRadioGroup = styled(RadioGroup)(styledRadioGroupCss);
const GenreBox = styled(Container)(genreBoxCss);