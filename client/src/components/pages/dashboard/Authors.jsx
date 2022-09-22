import { Box, styled } from '@mui/material'
import React from 'react'

const Authors = () => {
  
  // Authors container in Dashboard, lets the user:
  //   * view their Pen Names 
  //   * create new pen name to write stories under => AuthorForm
  //   * filter active stories based on selected pen name

  return (
    <AuthorsBox>
      <div>Authors</div>
      
    </AuthorsBox>
  )
}

export default Authors

const AuthorsBox = styled(Box)({
  border: '1px solid orange',
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: '25vw',
})