// import React, { useState } from 'react'
// import React, { useContext, useState } from 'react'
// import AuthError from '../pages/landing/form-side/AuthError'
// import { UserContext } from '../../../context/UserContext'
// // import { handleAPI } from '../../helpers/fetchRequests'
// import { Box, Button, FormControl, styled, TextField, Typography } from '@mui/material'
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
// import { credentialCss, loginBoxCss, submitBtnCss, taglineCss } from '../../styles/login/loginCss'
import React from "react"

const NewUserForm = () => {
// const NewUserForm = ({ onGoBack, onUserInput, userInfo }) => {
  // const { user, setUser } = useContext(UserContext);
  // const [errors, setErrors] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [authorName, setAuthorName] = useState('');
  // const [genre, setGenre] = useState('');


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // POST create author
  //   // pass genre to Story component, fetch new story from 'genres/:id/stories/new'
  //   // PATCH user favorites
  //   // navigate client to '/stories/new'
  //   console.log(userInfo)
  // }

  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   let url = ""
  //   showSignUp ? url = "/signup" : url = "/login"
  //   handleAPI(url, "POST", userInfo)
  //   .then((res) => {
  //     setIsLoading(false)
  //     if (res.ok) {
  //       res.json().then((newUser) => setUser(newUser))
  //       .then(() => showSignUp ? navigate('/intro') : navigate('/dashboard'))
  //     } else {
  //       res.json().then((err) => setErrors(err.errors))
  //     }
  //   })
  // }

  return ( <><h1>NewUserForm in progress...</h1></>)}

//   return (
  //<>
  //  <Header variant="h3">Out story starts with you, { user.username }</Header>
//     <FormControl variant="standard" >
//       <SignupBox 
//         component="form" 
//         onSubmit={ (e) => handleSignup(e) } 
//         id="new-user-form"
//       >
//         { input("username", true, userInfo.username) }
//         { input("password", false, userInfo.password) }
//         <Credential 
//           required 
//           label="confirm password"
//           name="password_confirmation"
//           type="password"
//           value={ userInfo.password_confirmation }
//           onChange={ (e) => onUserInput(e) }
//         />
//         <BackBtn onClick={() => onGoBack(false)}>Go Back</BackBtn>
//         <SubmitBtn 
//           size="large" 
//           variant="outline" 
//           type="submit" 
//           form="new-user-form"
//           endIcon={ <AppRegistrationIcon /> }
//         >
//           { isLoading ? "LOADING..." : "Let's get started!" }
//         </SubmitBtn>
//       </SignupBox>
//       { errors.map((err) => <AuthError key={ err }>{ err }</AuthError>) }
//     </FormControl>
//   )
// }

export default NewUserForm

// const SignupBox = styled(Box)(loginBoxCss)

// const Header = styled(Typography)(taglineCss)

// const Credential = styled(TextField)(credentialCss)

// const SubmitBtn = styled(Button)(submitBtnCss)

// const BackBtn = styled(Button)(submitBtnCss)