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
    .then(navigate('/'))
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


const Banner = styled(AppBar)({
  display: 'flex',
  flexDirection: 'row',
  background: '#21BA54',
  color: '#DDC'
})

const Header = styled(Typography)({
  padding: '10px',
  flexGrow: 1
})

const Btn = styled(IconButton)({
  color: '#DDC',
  margin: '10px',
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
    color: '#F16500'
  }
})
