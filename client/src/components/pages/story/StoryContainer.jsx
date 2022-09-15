import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'


const StoryContainer = () => {
  const location = useLocation();
  console.log("Location from StoryContainer: ", location.state)

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
      <h1 style={{ marginTop:100 }}>StoryContainer</h1>

      <Outlet />
    </>
  )
}

export default StoryContainer