
import { Box, Button, Container,FormControl,styled } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorContext } from '../../context/AuthorContext';
import { GenreContext } from '../../context/GenreContext';
import { handleAPI } from '../../helpers/fetchRequests';

// import GenresDropdown from './GenresDropdown';
// import AuthorsDropdown from './AuthorsDropdown';
import TextEditor from './text-editor/TextEditor';
import '../../../../node_modules/draft-js/dist/Draft.css'
import '../../styles/story/richText.css'
import { editorWrapperCss, newStoryBoxCss, submitBtnCss, requiredInputWrapperCss } from '../../styles/story/newStoryFormCss';

const NewStoryForm = () => {

  const { chosenGenre } = useContext(GenreContext);
  const { currentAuthor } = useContext(AuthorContext);
  const [formData, setFormData] = useState({
    genre_id: chosenGenre,
    title: "",
    author_id: 1,
    rich_text_str: ""
  })
  const navigate = useNavigate();
  const newStoryUrl = `/stories/new-story`
  console.log("Current author: ", currentAuthor)


const handleSubmit = (e) => {
    e.preventDefault();
    handleAPI(newStoryUrl, "POST", formData)
    .then((res) => {
      if (res.ok) {
        res.json().then((story) => console.log("New Story response: ", story))
        .then(() => navigate('/home'))
      } else {
        console.log("Bad fetch request. The new story was not saved. Please contact server admin and try again.")
      }
    })
  }

  return (

      <NewStoryBox
        component="form"
        onSubmit={ (e) => handleSubmit(e) }
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
            handleHtml={ setFormData }
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