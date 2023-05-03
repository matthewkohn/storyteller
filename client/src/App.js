import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { appContainerCss } from './styles/appCss';
import { UserContext } from './context/UserContext';
import Landing from './components/pages/login-page/Landing';
// import MainHeader from './components/pages/home-page/MainHeader';
import Story from './components/pages/story/Story';
import ViewStory from './components/pages/story/ViewStory';
import WriteStory from './components/pages/story/WriteStory';
import NewStory from './components/pages/story/NewStory';
import HomePage from './components/pages/home-page/HomePage';

function App() {
  const { user } = useContext(UserContext);

  if (!user) return <Landing />
  
  return (
    <AppContainer maxWidth='false' disableGutters>
      {/* <MainHeader /> */}
      <Routes>
        <Route index element={ <Landing /> } />
        <Route path='home' element={ <HomePage /> } />
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

const AppContainer = styled(Container)(appContainerCss);