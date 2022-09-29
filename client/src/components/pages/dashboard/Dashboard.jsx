import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import Authors from './Authors'
import Stories from './Stories'

const Dashboard = () => {
  const [currentAuthor, setCurrentAuthor] = useState({
    name: "",
    id: null
  });

  return (
    <DashboardContainer>
      <DashboardBox>
        <Authors 
          currentAuthor={ currentAuthor } 
          onSelectAuthor={ setCurrentAuthor } 
        />
        <Stories 
          authorName={ currentAuthor.name }
        />
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