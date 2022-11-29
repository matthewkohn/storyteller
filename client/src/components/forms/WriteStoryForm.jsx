import React from 'react'
import { Button, Container, FormControl, styled, Typography } from '@mui/material';
import { cancelEditBtnCss, editContainerCss, penNamesCss, submitBtnCss, authorLabelCss } from '../../styles/story/writeStoryCss';
import AuthorsDropdown from './AuthorsDropdown';
import TextEditor from './text-editor/TextEditor';


const WriteStoryForm = ({ 
  genre,
  updateInput,
  editValue,
  onUpdate,
  onCancel,
  onSubmit
}) => {


  return (
    <>
      <EditContainer component="form" id="contribute">
        <FormControl>
          <PenNames>
            <AuthorLabel variant="h6">Continued by:</AuthorLabel>
            <AuthorsDropdown />
          </PenNames>

          <TextEditor 
            handleHtml={ updateInput }
            editValue={ editValue }
          />
          { editValue ?
          <>
            <SubmitBtn 
              variant="contained"
              onClick={ (e) => onUpdate(e) }
            >
              Update
            </SubmitBtn>
            <CancelEditBtn
              variant="contained"
              onClick={ () => onCancel() }
            >
              Cancel and continiue
            </CancelEditBtn>
          </>
          :
            <SubmitBtn 
              variant="contained"
              onClick={ (e) => onSubmit(e) }
            >
              Submit
            </SubmitBtn>
          }
        </FormControl>
      </EditContainer>
    </>
  )
}

export default WriteStoryForm

const EditContainer = styled(Container)(editContainerCss);
const PenNames = styled(Container)(penNamesCss);
const AuthorLabel = styled(Typography)(authorLabelCss);
const SubmitBtn = styled(Button)(submitBtnCss);
const CancelEditBtn = styled(Button)(cancelEditBtnCss);