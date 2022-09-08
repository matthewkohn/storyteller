import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { appContainerCss } from '../../../styles/main/appCss';
import { UserContext } from '../../../context/UserContext';
import Landing from '../landing/Landing';
import Navbar from './Navbar';
import Dashboard from '../dashboard/Dashboard';
import NewUser from '../start/NewUser';
import Story from '../story/Story';

function App() {
  const { user } = useContext(UserContext);

  if (!user) return <Landing />
  
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path='/start' element={ <NewUser /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/first-story' element={ <Story /> } />
        <Route index element={ <Landing /> } />
      </Routes>
    </AppContainer>
  );
}

export default App;

// Styled components
const AppContainer = styled(Container)(appContainerCss);