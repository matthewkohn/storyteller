import React from 'react'
import { Box, styled } from '@mui/material'
// import Authors from './Authors'
import Stories from './Stories'
import { dashboardBoxCcss, dashboardContainerCss } from '../../../styles/main/dashboardCss'

const Dashboard = () => {

  return (
    <DashboardContainer>
      <DashboardBox>
        
        <Stories />
      </DashboardBox>
    </DashboardContainer>
  )
}

export default Dashboard

const DashboardContainer = styled(Box)(dashboardContainerCss)
const DashboardBox = styled(Box)(dashboardBoxCcss)