// import React, { useContext, useState } from 'react'
import React, { useState } from 'react'
import LoginError from '../pages/login/LoginError'
// import { UserContext } from '../../../context/UserContext'
import { handleAPI } from '../../helpers/fetchRequests'
import { Box, Button, FormControl, styled, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { useNavigate } from 'react-router-dom'


const LoginForm = ({ onLogin, showSignUp }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    password_confirmation: '',
    admin: false
  })
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleUserInput = (e) => {
    const inputName = e.target.name
    setUserInfo({
      ...userInfo, 
      [inputName]: e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    let url = ""
    showSignUp ? url = "/signup" : url = "/login"
    handleAPI(url, "POST", userInfo)
    .then((res) => {
      setIsLoading(false)
      if (res.ok) {
        res.json().then((newUser) => onLogin(newUser))
        .then(navigate('/dashboard'))
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
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
        { showSignUp ? 
          <Credential 
            required 
            label="confirm password"
            name="password_confirmation"
            type="password"
            value={ userInfo.password_confirmation }
            onChange={ (e) => handleUserInput(e) }
          /> : <></>
        }
          <SubmitBtn 
            size="large" 
            variant="outline" 
            type="submit" 
            form="login-form"
            endIcon={ showSignUp ? <AppRegistrationIcon /> : <LoginIcon /> }
          >
            { isLoading ? "LOADING..." : showSignUp ? "Let's get started!" : "Log in" }
          </SubmitBtn>
      </LoginBox>
      { errors.map((err) => <LoginError key={ err }>{ err }</LoginError>) }
    </FormControl>
  )
}

export default LoginForm


const LoginBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
})

const Credential = styled(TextField)({
  background: '#DDC',
  borderRadius: '5px',
  margin: '0 auto 15px'
})

const SubmitBtn = styled(Button)({
  color: '#DDC',
  margin: '23px auto',
  padding: '20px',
  border: '1px solid #666',
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: 'blue'
  }
})