import React from 'react'
import { Box, Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Authors from './Authors'
import Stories from './Stories'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <DashboardContainer>
      <Button onClick={ () => navigate('/story/new') } >New Story</Button>
      <Button onClick={ () => navigate('/story/1/edit') } >Contribute</Button>
      <DashboardBox>
        <Authors />
        <Stories />
      </DashboardBox>
    </DashboardContainer>
  )
}

export default Dashboard

const DashboardContainer = styled(Box)({
  paddingTop: '100px',
})

const DashboardBox = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
})