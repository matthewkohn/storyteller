import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { appContainerCss } from '../../../styles/main/appCss';
import { UserContext } from '../../../context/UserContext';
import Landing from '../landing/Landing';
import Navbar from './Navbar';
import Dashboard from '../dashboard/Dashboard';
import NewUser from '../landing/form-side/NewUser';

function App() {
  const { user } = useContext(UserContext);

  if (!user) return <Landing />

  console.log("CurrentUser from fetch'/me': ", user)
  
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path='/start' element={ <NewUser /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />

        <Route index element={ <Landing /> } />
      </Routes>
    </AppContainer>
  );
}

export default App;

// Styled components
const AppContainer = styled(Container)(appContainerCss);