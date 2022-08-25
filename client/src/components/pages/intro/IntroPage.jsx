import { styled, Typography } from '@mui/material'
import React from 'react'


const IntroPage = () => {
  return (
    <>
    <Test variant="h1">This is the INTRO</Test>
    </>
  )
}

export default IntroPage

const Test = styled(Typography)({
  margin: '100px',
})