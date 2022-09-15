import { styled, Typography } from '@mui/material'
import React from 'react'
import ActiveStories from './ActiveStories'
import Authors from './Authors'

const Dashboard = () => {
  return (
    <>
      <Test variant='h1'>Nice work!</Test>
      <Authors />
      <ActiveStories /> 
    </>
  )
}

export default Dashboard

const Test = styled(Typography)({
  margin: '100px'
})