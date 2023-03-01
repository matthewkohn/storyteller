import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { errorBoxCss } from '../../../styles/loginCss';

const AuthError = ({ children, timeoutErrorMessage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      timeoutErrorMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [])

  if (!isVisible) return null;

  return (
    <ErrorBox>
      { children }
    </ErrorBox>
  )
};

export default AuthError;

const ErrorBox = styled(Box)(errorBoxCss);