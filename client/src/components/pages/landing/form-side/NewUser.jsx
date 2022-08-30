import React, { useState } from 'react';
import SignupForm from '../../../forms/SignupForm';
// import NewUserForm from '../../../forms/NewUserForm';
import { styled, Typography } from '@mui/material';
import { titleCss } from '../../../../styles/login/loginCss';


const NewUser = () => {

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    password_confirmation: '',
    favorite_author: '',
    favorite_book: '',
    favorite_audiobook: '',
    favorite_podcast: ''
  });

  const handleUserInput = (e) => {
    const inputName = e.target.name;
    setUserInfo({
      ...userInfo, 
      [inputName]: e.target.value
    })
  }

  return (
    <>
      <Title variant='h3'>Storyteller</Title>
      
    
          <SignupForm 
            userInfo={ userInfo }
            onUserInput={ handleUserInput }
          /> 
 
      
    </>
  )
}

export default NewUser

// Styled components
const Title = styled(Typography)(titleCss);

