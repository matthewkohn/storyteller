import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Container, IconButton, Tooltip, Zoom, styled } from '@mui/material';
import { dashboardCss, logoutBtn } from '../../../styles/homePageCss';
import Bookshelf from './Bookshelf';
import Welcome from './Welcome';
import LogoutIcon from '@mui/icons-material/Logout';
import { handleDELETE } from '../../../helpers/fetchRequests';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    handleDELETE('/logout')
    .then(() => setUser(null))
    .then(navigate('/'));
  };

  return (
    <Dashboard>
      <Welcome />
      <Bookshelf />
      <Tooltip
        title={`LOGOUT`}
        placement="bottom"
        TransitionComponent={Zoom}
      >
        <LogoutBtn onClick={ () => handleLogout() } >
          <LogoutIcon />
        </LogoutBtn>
      </Tooltip>
    </Dashboard>
  )
}

export default HomePage

const Dashboard = styled(Container)(dashboardCss);
const LogoutBtn = styled(IconButton)(logoutBtn);