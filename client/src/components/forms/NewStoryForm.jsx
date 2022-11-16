import React from 'react';
import { Box, Button, Container,FormControl,styled } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
// import GenresDropdown from './GenresDropdown';
// import AuthorsDropdown from './AuthorsDropdown';
import TextEditor from './text-editor/TextEditor';
import '../../../../node_modules/draft-js/dist/Draft.css'
import '../../styles/story/richText.css'
import { editorWrapperCss, newStoryBoxCss, submitBtnCss, requiredInputWrapperCss } from '../../styles/story/newStoryFormCss';

const NewStoryForm = ({ onSubmit, storyInput, updateStory }) => {

  return (

      <NewStoryBox
        component="form"
        onSubmit={ (e) => onSubmit(e) }
        id="new-story-form"
      >
        <FormControl>
        <RequiredInputWrapper>
          <>
            {/* <TextField 
              required
              value={ storyInput.title } 
              onChange={ (e) => updateStory({ ...storyInput, title: e.target.value }) } 
            /> */}
          </> 
          <>
            {/* <GenresDropdown 
              isDisabled={false} 
            />  */}
          </>
          <>
            {/* <AuthorsDropdown/>  */}
          </>
        </RequiredInputWrapper>
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
        </FormControl>
        </NewStoryBox>

  )

}

export default NewStoryForm

const NewStoryBox = styled(Box)(newStoryBoxCss);
const RequiredInputWrapper = styled(Container)(requiredInputWrapperCss);
const EditorWrapper = styled(Container)(editorWrapperCss);
const SubmitBtn = styled(Button)(submitBtnCss);
// const StyledFormControlLabel = styled(FormControlLabel)(styledFormControlLabelCss)