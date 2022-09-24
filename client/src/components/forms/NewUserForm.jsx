import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, styled, TextField } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { UserContext } from '../../context/UserContext';
import { newUserBoxCss, primaryItemsCss, submitBtnCss } from '../../styles/start/newUserCss';
import { handleAPI } from '../../helpers/fetchRequests';
import GenresDropdown from './GenresDropdown';
import { GenreContext } from '../../context/GenreContext';

const NewUserForm = () => {
  const { user } = useContext(UserContext);
  const { currentGenre } = useContext(GenreContext);
  const [penName, setPenName] = useState(user.username);
  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setPenName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAPI('/authors', "POST", { name: penName }).then((res) => res.json())
    .then((data) => console.log(data))
    // need to navigate to '/story/:storyId/write' based on chosenGenre & reset GenreContext state to ('')
    // .then(() => navigate('/story/1/first-story', { state: [penName, chosenGenre] }))
    .then(() => navigate('/home'))
    .catch((error) => console.log(error));
  }

  console.log(currentGenre)
  return ( 
    <FormControl fullWidth variant="standard" >
      <NewUserBox
        component="form" 
        onSubmit={ (e) => handleSubmit(e) } 
        id="new-user-form"
      >
        <PrimaryItems>
          <TextField 
            autoFocus
            required
            name="penName"
            value={ penName }
            onChange={ (e) => handleUserInput(e) }
            label="Pen Name" 
            variant="standard" 
          />
        </PrimaryItems>
        <PrimaryItems>
          <GenresDropdown isDisabled={ false }/>
        </PrimaryItems>
      </NewUserBox>
    
      <SubmitBtn 
        size="large"
        variant="contained" 
        form="new-user-form"
        type="submit"
        endIcon={ <LightbulbIcon /> }
      >
        Begin your first story
      </SubmitBtn>
    </FormControl>
  )
}

export default NewUserForm

// Styled components
const NewUserBox = styled(Box)(newUserBoxCss);
const PrimaryItems = styled(Box)(primaryItemsCss);
const SubmitBtn = styled(Button)(submitBtnCss);