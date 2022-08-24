import { handleDELETE } from '../../../helpers/fetchRequests'
import { AppBar, IconButton, styled, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'


const Navbar = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    handleDELETE('/logout')
    .then(() => {
      onLogout(null)
    })
    .then(navigate('/login'))
  }

  return (
    <Banner>
      <Header variant='h3' component='div'>Storyteller</Header>
      <Btn onClick={ () => handleLogout() } >
        <LogoutIcon />
      </Btn>
    </Banner>
  )
}

export default Navbar


const Banner = styled(AppBar)(({ theme }) => `
  color: ${theme.palette.primary.light};
  background-color: ${theme.palette.primary.dark};
  flex-direction: row;
  min-height: 10vh;
`)

const Header = styled(Typography)({
  padding: '10px',
  flexGrow: 1,
  letterSpacing: '2px',
})

const Btn = styled(IconButton)(({ theme }) => `
  color: ${theme.palette.primary.light};
  margin: 10px;
  padding: 15px;
  :hover {
    color: ${theme.palette.secondary.light};
    background-color: ${theme.palette.secondary.dark}
  }
`)
