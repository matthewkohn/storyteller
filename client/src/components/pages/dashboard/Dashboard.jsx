import { styled, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <Test variant='h1'>Nice work!</Test>    
    </>
  )
}

export default Dashboard

const Test = styled(Typography)({
  margin: '100px'
})