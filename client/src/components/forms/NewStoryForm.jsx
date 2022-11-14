import React from 'react';
import { Box, Button, FormControl, FormControlLabel, Paper, styled, TextField } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import GenresDropdown from './GenresDropdown';
import TextEditor from './text-editor/TextEditor';
import { Container } from '@mui/system';
import '../../../../node_modules/draft-js/dist/Draft.css'
import '../../styles/story/richText.css'
import { editorWrapperCss, newStoryBoxCss, submitBtnCss, titleGenreWrapperCss } from '../../styles/story/newStoryFormCss';

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
          <TextEditor 
            handleHtml={ updateStory }
            editValue='' 
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

const NewStoryBox = styled(Box)(newStoryBoxCss);
const SubmitBtn = styled(Button)(submitBtnCss);
const EditorWrapper = styled(Paper)(editorWrapperCss);
const TitleGenreWrapper = styled(Container)(titleGenreWrapperCss);