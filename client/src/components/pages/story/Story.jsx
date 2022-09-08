import React from 'react'
import { useLocation } from 'react-router-dom'

const Story = () => {
  const location = useLocation();
  console.log("Location from Story: ", location.state)
  
  return (
    <>
      <h1 style={{ marginTop:100 }}>Story</h1>
    </>
  )
}

export default Story