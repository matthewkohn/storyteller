import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { handleDELETE } from '../../../helpers/fetchRequests';
import { AppBar, Button, IconButton, styled, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { bannerCss, logoutBtnCss, mainTitleCss } from '../../../styles/mainHeaderCss';

const MainHeader = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    handleDELETE('/logout')
    .then(() => setUser(null))
    .then(navigate('/'));
  };

  return (
    <Banner>
      <Button onClick={ () => navigate('/home') } >
        <MainTitle variant='h1'>Storyteller</MainTitle>
      </Button>
      <LogoutBtn onClick={ () => handleLogout() } >
        <LogoutIcon />
      </LogoutBtn>
    </Banner>
  )
}

export default MainHeader;

const Banner = styled(AppBar)(bannerCss);
const MainTitle = styled(Typography)(mainTitleCss);
const LogoutBtn = styled(IconButton)(logoutBtnCss);
