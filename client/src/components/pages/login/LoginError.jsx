import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { errorBoxCss } from '../../../styles/login/loginCss'

const LoginError = ({ children }) => {
  return (
    <ErrorBox>
      {children}
    </ErrorBox>
    
  )
}

export default LoginError

const ErrorBox = styled(Box)(errorBoxCss)