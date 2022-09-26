import React from 'react';
import { Box, Button, FormControl, FormControlLabel, Paper, styled, TextField } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import GenresDropdown from './GenresDropdown';
import RichTextEditor from '../pages/story/edit-story/RichTextEditor';
import { Container } from '@mui/system';

const NewStoryForm = ({ 
  updateStory, 
  title, 
  updateTitle, 
  genre,
  onPublish }) => {

  return (
    <FormControl >
      <NewStoryBox
        component="form"
        onSubmit={ (e) => onPublish(e) }
        id="new-story-form"
      >
        <TitleGenreWrapper>

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
        </TitleGenreWrapper>

        <EditorWrapper >
          <RichTextEditor 
            handleHtml={ updateStory }
            />

        </EditorWrapper>
     
        <SubmitBtn 
          variant="contained"
          type="submit"
          form="new-story-form"
          endIcon={ <PublishIcon /> }
        >
          Submit
        </SubmitBtn>
      </NewStoryBox>
    </FormControl>
  )
}

export default NewStoryForm

const NewStoryBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const SubmitBtn = styled(Button)(({ theme }) => `
  
`)


const EditorWrapper = styled(Paper)({
  width: '60%',
  marginBottom: '10px',
})

const TitleGenreWrapper = styled(Container)({
  display: 'inherit',
  justifyContent: 'space-evenly',
  marginBottom: '10px',
})