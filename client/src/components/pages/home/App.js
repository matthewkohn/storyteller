import '../../../styles/App.css';
import React, { useEffect, useState } from 'react'
import SignIn from '../login/Signin'
import Navbar from './Navbar';
import Dashboard from '../dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import { Container, styled } from '@mui/material'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then(r => r.json())
    .then(user => setCurrentUser(user))
  }, [])

  if (!currentUser) return <SignIn setCurrentUser={setCurrentUser} />

  console.log("CurrentUser from fetch'/me': ", currentUser)
  
  return (
    <AppContainer>
      <Navbar onLogout={setCurrentUser} />
      <Routes>
        <Route path='/dashboard' element={ <Dashboard /> } />

        <Route path='/' element={ <SignIn /> } />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled(Container)({
  margin: 'auto',
})