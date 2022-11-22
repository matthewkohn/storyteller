import React, { useContext, useState } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, styled, TextField } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import '../../../../node_modules/draft-js/dist/Draft.css'
import '../../styles/story/richText.css'
import { editorWrapperCss, newStoryBoxCss, submitBtnCss, requiredInputWrapperCss, newStoryFormHeaderCss } from '../../styles/story/newStoryFormCss';
import { useNavigate } from 'react-router-dom';
import { AuthorContext } from '../../context/AuthorContext';
import { GenreContext } from '../../context/GenreContext';
import { handleAPI } from '../../helpers/fetchRequests';
import GenresDropdown from './GenresDropdown';
import AuthorsDropdown from './AuthorsDropdown';
import TextEditor from './text-editor/TextEditor';

const NewStoryForm = () => {

  const { chosenGenre } = useContext(GenreContext);
  const [currentAuthor] = useContext(AuthorContext);
  const [title, setTitle] = useState("");
  const [richText, setRichText] = useState("");
  const formData = {
    genre_id: chosenGenre.id,
    title: title,
    author_id: currentAuthor.id,
    rich_text_str: richText
  }
  console.log(chosenGenre)

  const navigate = useNavigate();
  const newStoryUrl = `/stories`
  console.log("FormData from NewStoryForm: ", formData)


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
        <RequiredInputWrapper>
          <Header>
            <FormControl>
              <FormControlLabel
                label="Title:"
                labelPlacement='start'
                control={
                  <TextField 
                    required
                    value={ title } 
                    onChange={ (e) => setTitle(e.target.value) } 
                  />
                }
              />
            </FormControl> 
            <FormControl>
              <FormControlLabel
                label="by"
                labelPlacement='start'
                control={
                  <AuthorsDropdown/> 
                }
              />
            </FormControl>
          </Header>
          <FormControl>
            <GenresDropdown 
              isDisabled={false} 
            /> 
          </FormControl>
        </RequiredInputWrapper>
        <EditorWrapper >
          <TextEditor 
            handleHtml={ setRichText }
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
  )
}

export default NewStoryForm

const NewStoryBox = styled(Box)(newStoryBoxCss);
const RequiredInputWrapper = styled(Container)(requiredInputWrapperCss);
const Header = styled(Container)(newStoryFormHeaderCss);
const EditorWrapper = styled(Container)(editorWrapperCss);
const SubmitBtn = styled(Button)(submitBtnCss);
// const StyledFormControlLabel = styled(FormControlLabel)(styledFormControlLabelCss)