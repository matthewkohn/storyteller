import React, { useContext, useState } from 'react';
import AuthError from '../pages/landing/form-side/AuthError';
import { UserContext } from '../../context/UserContext';
import { handleAPI } from '../../helpers/fetchRequests';
import { Box, Button, FormControl, styled, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { credentialCss, loginBoxCss, submitBtnCss } from '../../styles/login/loginCss';


const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    const inputName = e.target.name
    setUserInfo({
      ...userInfo, 
      [inputName]: e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handleAPI("/login", "POST", userInfo)
    .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((newUser) => setUser(newUser))
        .then(() => navigate('/dashboard'));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const input = (attr, autoFocus, val) => {
    return (
      <Credential
        autoFocus={ autoFocus }
        required
        label={ attr }
        name={ attr }
        type={ attr }
        value={ val }
        onChange={ (e) => handleUserInput(e) } />
    )
  }

  return (
    <FormControl variant="standard" >
      <LoginBox 
        component="form" 
        onSubmit={ (e) => handleLogin(e) } 
        id="login-form"
      >
        { input("username", true, userInfo.username) }
        { input("password", false, userInfo.password) }
        <SubmitBtn 
          size="large" 
          variant="outline" 
          type="submit" 
          form="login-form"
          endIcon={ <LoginIcon /> }
        >
          { isLoading ? "LOADING..." : "Log in" }
        </SubmitBtn>
      </LoginBox>
      { errors.map((err) => <AuthError key={ err }>{ err }</AuthError>) }
    </FormControl>
  )
}

export default LoginForm

// Styled components
const LoginBox = styled(Box)(loginBoxCss);
const Credential = styled(TextField)(credentialCss);
const SubmitBtn = styled(Button)(submitBtnCss);