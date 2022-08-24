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

const ErrorBox = styled(Box)(({ theme }) => `
  color: red;
  background: lightblue;
  margin: 2px auto;
  padding: 0 25px;
  border-radius: 10px;
  font-family: 'Kalam';
`)