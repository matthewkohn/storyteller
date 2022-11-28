import React from 'react'
import { Button, Container, FormControl, styled, Typography } from '@mui/material';
import { cancelEditBtnCss, editContainerCss, editGenreCss, penNamesCss, submitBtnCss } from '../../styles/story/writeStoryCss';
import AuthorsDropdown from './AuthorsDropdown';
import TextEditor from './text-editor/TextEditor';
import { useContext } from 'react';
import { GenreContext } from '../../context/GenreContext';

const WriteStoryForm = ({ 
  updateInput,
  editValue,
  onUpdate,
  onCancel,
  onSubmit
}) => {

  const { chosenGenre } = useContext(GenreContext);
  console.log("chosenGenre from WriteStoryForm: ", chosenGenre)
  
  return (
    <>
      <EditContainer component="form" id="contribute">
          <FormControl>
            <PenNames>
              <Typography variant="h6">Your current Pen Name:</Typography>
              <AuthorsDropdown />
            </PenNames>
            {/* <Genre variant="h6">Genre: {chosenGenre}</Genre> */}
            <Genre>Genre</Genre>

            <TextEditor 
              handleHtml={ updateInput }
              editValue={ editValue }
            />
            {
          editValue ?
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
const Genre = styled(Typography)(editGenreCss);
const SubmitBtn = styled(Button)(submitBtnCss);
const CancelEditBtn = styled(Button)(cancelEditBtnCss);