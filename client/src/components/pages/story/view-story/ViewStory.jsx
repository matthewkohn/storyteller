import React from 'react'
import Preview from '../edit-story/Preview'
import StoryStats from './StoryStats'

const ViewStory = () => {

  // Displays jsx returned from ParagraphsController from API
  // StoryStats is an accordion next to the story text

  
  return (
    <>
      <div>ViewStory</div>
      <Preview />
      <StoryStats />
    </>
  )
}

export default ViewStory