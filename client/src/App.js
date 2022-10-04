import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { appContainerCss } from './styles/main/appCss';
import { UserContext } from './context/UserContext';
import Landing from './components/pages/landing/Landing';
import Navbar from './components/pages/navigation/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import Story from './components/pages/story/Story';
import ViewStory from './components/pages/story/view-story/ViewStory';
import WriteStory from './components/pages/story/edit-story/WriteStory';
import NewStory from './components/pages/story/edit-story/NewStory';

function App() {
  const { user } = useContext(UserContext);

  if (!user) return <Landing />
  
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route index element={ <Landing /> } />
        <Route path='home' element={ <Dashboard /> } />
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