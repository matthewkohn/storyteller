import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const LoginError = ({ children }) => {
  return (
    <ErrorBox>
      {children}
    </ErrorBox>
    
  )
}

export default LoginError

const ErrorBox = styled(Box)({
  color: 'red',
  backgroundColor: 'lightblue',
  margin: '2px auto',
  padding: '5px 15px',
  borderRadius: '10px',
  fontStyle: 'italic'
})