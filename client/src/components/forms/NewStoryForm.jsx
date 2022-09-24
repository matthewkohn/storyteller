import { Box, FormControl, FormControlLabel, styled, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
// import { useContext } from 'react'
import { GenreContext } from '../../context/GenreContext'
import GenresDropdown from './GenresDropdown';
import RichTextEditor from '../pages/story/edit-story/RichTextEditor'

const NewStoryForm = () => {
  const [htmlStr, setHtmlStr] = useState("")
  const { chosenGenre } = useContext(GenreContext);

  return (
    <NewStoryBox>

      <FormControl sx={{ width: '100%', textAlign: 'center' }}>
        <FormControlLabel
          value={"Title"}
          label="Story Title"
          labelPlacement='start'
          control={ 
            <TextField /> 
          }
        />
        <FormControlLabel
          value={ chosenGenre }
          label="Genre"
          labelPlacement='start'
          control={ <GenresDropdown isDisabled={false} /> }
        />
        <FormControlLabel
          value={ htmlStr }
          label="Story Introduction"
          labelPlacement='start'
          control={ <RichTextEditor handleHtml={ setHtmlStr } /> }
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