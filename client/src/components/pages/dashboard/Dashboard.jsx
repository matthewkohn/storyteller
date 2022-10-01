import React from 'react'
import { Box, styled } from '@mui/material'
import Authors from './Authors'
import Stories from './Stories'

const Dashboard = () => {

  return (
    <DashboardContainer>
      <DashboardBox>
        <Authors />
        <Stories />
      </DashboardBox>
    </DashboardContainer>
  )
}

export default Dashboard

const DashboardContainer = styled(Box)({
  paddingTop: '40px',
})

const DashboardBox = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
})