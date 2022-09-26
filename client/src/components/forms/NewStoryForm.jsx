import React from 'react';
import { Box, FormControl, FormControlLabel, styled, TextField } from '@mui/material';
import GenresDropdown from './GenresDropdown';
import RichTextEditor from '../pages/story/edit-story/RichTextEditor';

const NewStoryForm = ({ 
  story, 
  updateStory, 
  title, 
  updateTitle, 
  genre }) => {

  return (
    <NewStoryBox>

      <FormControl sx={{ width: '100%', textAlign: 'center' }}>
        <FormControlLabel
          label="Story Title"
          labelPlacement='start'
          control={ 
            <TextField 
              required
              value={ title } 
              onChange={ (e) => updateTitle(e.target.value) } 
            /> 
          }
        />
        <FormControlLabel
          value={ genre }
          label="Genre"
          labelPlacement='start'
          control={ 
            <GenresDropdown 
              isDisabled={false} 
            /> 
          }
        />
        <FormControlLabel
          value={ story }
          label="Story Introduction"
          labelPlacement='start'
          control={ 
            <RichTextEditor 
              handleHtml={ updateStory } 
            /> 
          }
        />

      </FormControl>
    </NewStoryBox>
  )
}

export default NewStoryForm

const NewStoryBox = styled(Box)({
  display: 'inherit',
  justifyItems: 'center',
})