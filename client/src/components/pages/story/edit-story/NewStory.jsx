import { Container, styled } from '@mui/material'
import React from 'react'
import NewStoryForm from '../../../forms/NewStoryForm'

const NewStory = () => {
  return (
    <NewStoryContainer>
      <div>NewStory</div>
      <NewStoryForm />
    </NewStoryContainer>
  )
}

export default NewStory

const NewStoryContainer = styled(Container)({
  paddingTop: '100px',
  maxHeight: '100vh',
  width: '100%',
  border: '1px solid purple',
  // display: 'flex',
  // justifyContent: 'center',
})