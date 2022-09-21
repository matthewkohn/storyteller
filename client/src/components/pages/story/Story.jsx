// import { styled, Typography } from '@mui/material';
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'


const Story = () => {
  const location = useLocation();
  console.log("Location from Story: ", location)

  // Responsible for displaying a story with Nav links to Dashboard & Stories
  // From here, the user can choose to delete or edit the last Paragraph if they were the Author
  // Depending on the route, the user can:
  //  '/'             View the story
  //  '/first-story'  Write their 1st story
  //  '/contribution'  Contribute to a story
  //  '/edit'         Edit their most recent passage
  //  '/new'          Create a new story
  //  

  // Story title
  // Genre name
  // Current author name
  
  return (
    <>
      {/* <Title variant="h3">Author: {location.state.penName}</Title> */}
      {/* <Typography variant="h3">Genre: {location.state.genre}</Typography> */}
      <Outlet />
    </>
  )
}

export default Story

// const Title = styled(Typography)({
  // marginTop: '100px',
// })