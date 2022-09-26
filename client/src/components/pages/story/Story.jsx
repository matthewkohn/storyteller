import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Button } from '@mui/material';



const Story = () => {

  // Responsible for displaying a story with Nav links to Dashboard & Stories
  // From here, the user can choose to delete or edit the last Paragraph if they were the Author
  // Depending on the route, the user can:
  //  '/'             View the story
  //  '/first-story'  Write their 1st story
  //  '/contribution'  Contribute to a story
  //  '/edit'         Edit their most recent passage
  //  '/new'          Create a new story
  //  
  
  return (
    <>
      {/* <Typography variant="h3">Genre: {location.state.genre}</Typography> */}
      {/* <Button onClick={ () => navigate('/story/1/edit') } >Contribute</Button> */}
      <Outlet />
    </>
  )
}

export default Story

// const Title = styled(Typography)({
  // marginTop: '100px',
// })