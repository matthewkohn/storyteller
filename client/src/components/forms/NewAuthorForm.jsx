import React from 'react';
import { Box, FormControl, IconButton, styled, TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const NewAuthorForm = ({ author, onAddInput, onSubmit }) => {
  return (
    <>
      <FormControl>
        <AddBox
          component="form"
          onSubmit={ (e) => onSubmit(e) }
          id="add-author-form"
        >  
          <TextField 
            variant="filled"
            size="small"
            required
            autoFocus
            value={ author }
            onChange={ (e) => onAddInput(e) }
          />
          <SubmitBtn 
            size="small" 
            form="add-author-form" 
            type="submit"
          >
            <AddBoxIcon />
          </SubmitBtn>
        </AddBox>
      </FormControl>
    </>
  )
}

export default NewAuthorForm


const SubmitBtn = styled(IconButton)(({ theme }) => `
  color: ${theme.palette.secondary.dark};
  maxWidth: 20px;
  `)
  
  const AddBox = styled(Box)(({ theme }) => `
  display: flex;
  flexDirection: column;
  background: ${theme.palette.secondary.light};
  color: ${theme.palette.secondary.dark};
  width: auto;
`)