import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { errorBoxCss } from '../../../../styles/login/loginCss';

const AuthError = ({ children, clearMessage }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false);
      clearMessage([]);
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [])

  if (!isVisible) return null

  return (
    <ErrorBox>
      {children}
    </ErrorBox>
    
  )
}

export default AuthError

const ErrorBox = styled(Box)(errorBoxCss);