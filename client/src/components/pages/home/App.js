import React, { useEffect, useState } from 'react'
import SignIn from '../login/Signin'
import Navbar from './Navbar';
import IntroPage from '../intro/IntroPage';
import Dashboard from '../dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import { Container, styled } from '@mui/material'
import { appContainerCss } from '../../../styles/main/appCss';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json().then(setCurrentUser)
      } else if (res.status === 401) {
        setError(res.statusText)
      }
    })
  }, [])

  if (!currentUser) return <SignIn setCurrentUser={setCurrentUser} />

  console.log("CurrentUser from fetch'/me': ", currentUser)
  console.log("Error from APP: ", error)
  
  return (
    <AppContainer>
      <Navbar onLogout={setCurrentUser} />
      <Routes>
        <Route path='/intro' element={ <IntroPage /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />

        <Route path='/login' element={ <SignIn setCurrentUser={setCurrentUser} /> } />
      </Routes>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled(Container)(appContainerCss)