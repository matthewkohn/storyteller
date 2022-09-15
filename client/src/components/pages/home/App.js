import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { appContainerCss } from '../../../styles/main/appCss';
import { UserContext } from '../../../context/UserContext';
import Landing from '../landing/Landing';
import Navbar from './Navbar';
import Dashboard from '../dashboard/Dashboard';
import NewUser from '../start/NewUser';
import Stories from '../storiesboard/Stories';
import StoryContainer from '../story/StoryContainer';
import Story from '../story/view-story/Story';
import WriterContainer from '../story/edit-story/WriterContainer';

function App() {
  const { user } = useContext(UserContext);

  if (!user) return <Landing />
  
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route index element={ <Landing /> } />
        <Route path='start' element={ <NewUser /> } />
        <Route path='dashboard' element={ <Dashboard /> } />
        <Route path='stories' element={ <Stories /> } />
        <Route path='story/:storyId' element={ <StoryContainer /> } >
          <Route index element={ <Story /> } />
          <Route path='new' element={ <WriterContainer /> } />
          <Route path='first-story' element={ <WriterContainer /> } />
          <Route path='contribution' element={ <WriterContainer /> } />
          <Route path='edit' element={ <WriterContainer /> } />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;

// Styled components
const AppContainer = styled(Container)(appContainerCss);