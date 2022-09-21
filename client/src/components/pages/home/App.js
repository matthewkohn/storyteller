import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { appContainerCss } from '../../../styles/main/appCss';
import { UserContext } from '../../../context/UserContext';
import Landing from '../landing/Landing';
import Navbar from './Navbar';
import Dashboard from '../dashboard/Dashboard';
import NewUser from '../start/NewUser';
// import Stories from '../storiesboard/Stories';
import Story from '../story/Story';
import ViewStory from '../story/view-story/ViewStory';
import WriteStory from '../story/edit-story/WriteStory';
import NewStory from '../story/edit-story/NewStory';

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
        {/* <Route path='stories' element={ <Stories /> } /> */}
        <Route path='story' element={ <Story /> } >
          <Route path='new' element={ <NewStory /> } />
          <Route path=':storyId' element={ <ViewStory /> } />
          <Route path=':storyId/write' element={ <WriteStory /> } />
          <Route path=':storyId/edit' element={ <WriteStory /> } />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;

// Styled components
const AppContainer = styled(Container)(appContainerCss);