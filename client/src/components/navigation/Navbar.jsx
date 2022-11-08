import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { handleDELETE } from '../../helpers/fetchRequests';
import { AppBar, Button, IconButton, styled, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { bannerCss, navBtnCss, navHeaderCss } from '../../styles/main/navbarCss';


const Navbar = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    handleDELETE('/logout')
    .then(() => {
      setUser(null);
    })
    .then(navigate('/'));
  }

  return (
    <Banner>
      <Button onClick={ () => navigate('/home')} >
        <NavHeader variant='h3' component='div'>Storyteller</NavHeader>
      </Button>
      <NavBtn onClick={ () => handleLogout() } >
        <LogoutIcon />
      </NavBtn>
    </Banner>
  )
}

export default Navbar

const Banner = styled(AppBar)(bannerCss)
const NavHeader = styled(Typography)(navHeaderCss)
const NavBtn = styled(IconButton)(navBtnCss)