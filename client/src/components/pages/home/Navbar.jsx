import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { handleDELETE } from '../../../helpers/fetchRequests';
import { AppBar, IconButton, styled, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { bannerCss, navBtnCss, navHeaderCss } from '../../../styles/main/navbarCss';


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
      {/* <img src='../../../assets/images/storyteller-logo-no-bg.png' alt='Storyteller Logo' /> */}
      <NavHeader variant='h3' component='div'>Storyteller</NavHeader>
      <NavBtn onClick={ () => handleLogout() } >
        <LogoutIcon />
      </NavBtn>
    </Banner>
  )
}

export default Navbar

// Styled components
const Banner = styled(AppBar)(bannerCss)

const NavHeader = styled(Typography)(navHeaderCss)

const NavBtn = styled(IconButton)(navBtnCss)
