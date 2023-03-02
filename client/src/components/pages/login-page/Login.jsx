import React, { useContext, useState } from 'react';
import { Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInContainerCss } from '../../../styles/loginPageCss';
import { handleAPI } from '../../../helpers/fetchRequests';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
import LoginFooter from './LoginFooter';
import { UserContext } from '../../../context/UserContext';

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [errors, setErrors] = useState(null);
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    password_confirmation: ''
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  let apiEndpoint = isNewUser ? '/signup' : '/login';

  const handleUserInput = (e) => {
    const inputName = e.target.name;
    setUserInput({
      ...userInput, 
      [inputName]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await handleAPI(apiEndpoint, "POST", userInput)
    .then((res) => {
      if (res.ok) {
        res.json().then((newUser) => setUser(newUser))
        .then(() => navigate('/home'));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
    if (isNewUser) {
      await handleAPI('/authors', "POST", { name: userInput.username })
      .then((res) => res.json())
      .then((data) => console.log(data[0]))
    }
  };

  const toggleNewUser = () => {
    setIsNewUser(!isNewUser);
  };

  const handleErrorsMessages = (val) => {
    setErrors(val);
  };

  return (
    <LoginContainer component='section'>
      <LoginTitle isNewUser={ isNewUser } />
      <LoginForm
        errors={ errors }
        isNewUser={ isNewUser }
        onError={ handleErrorsMessages }
        onLogin={ handleLogin }
        onUserInput={ handleUserInput }
        userInput={ userInput }
      />
      <LoginFooter
        isNewUser={ isNewUser }
        onToggle={ toggleNewUser }
      />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled(Box)(signInContainerCss);
