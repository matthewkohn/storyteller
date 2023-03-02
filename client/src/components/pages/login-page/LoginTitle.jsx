import React from 'react';
import { styled, Typography } from '@mui/material';
import { taglineCss } from '../../../styles/loginPageCss';

const LoginTitle = ({ isNewUser }) => {
  return (
    <>
      { isNewUser ?
        <Tagline variant='h2'>Create a Free Account</Tagline>
        :
        <Tagline variant='h2'>Open Your Bookshelf</Tagline>
      }
    </>
  );
};

export default LoginTitle;

const Tagline = styled(Typography)(taglineCss);
