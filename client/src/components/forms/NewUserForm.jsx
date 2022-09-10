import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, FormControl, styled, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useNavigate } from 'react-router-dom';
import { newUserBoxCss, submitBtnCss } from '../../styles/start/newUserCss';
import { handleAPI } from '../../helpers/fetchRequests';
import { UserContext } from '../../context/UserContext';
import FavoritesForm from './FavoritesForm';
import IntroForm from './IntroForm';

const NewUserForm = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // state

  const [requiredUserInput, setRequiredUserInput] = useState({
    penName: user.username,
    genre: ''
  });
  const [favorites, setFavorites] = useState({
    favoriteAuthor: '',
    favoriteBook: '',
    favoriteAudiobook: '',
    favoritePodcast: ''
  });
  const [allGenres, setAllGenres] = useState([]);
  
  useEffect(() => {
    fetch('/genres', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true
      },
    })
    .then((res) => res.json())
    .then((data) => setAllGenres(data))
    // eslint-disable-next-line
  }, [])


  // JSON
  const userFavoritesJson = {
    user_id: user.id,
    favorite_author: favorites.favoriteAuthor,
    favorite_book: favorites.favoriteBook,
    favorite_audiobook: favorites.favoriteAudiobook,
    favorite_podcast: favorites.favoritePodcast
  }
  const authorJson = {
    name: requiredUserInput.penName
  }

  const handleUserInput = (e) => {
    const inputName = e.target.name;
    if (inputName === "penName") {
      setRequiredUserInput({
        ...requiredUserInput, 
        [inputName]: e.target.value
      })
    } else {
      setFavorites({
        ...favorites,
        [inputName]: e.target.value
      })
    } 
  }


  const handleGenreSelection = (e) => {
    console.log("e.target.value: ", e.target.value)
    setRequiredUserInput({
      ...requiredUserInput,
      genre: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Promise.all([
      handleAPI('/authors', "POST", authorJson),
      handleAPI('/profiles', "POST", userFavoritesJson)
    ])
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((data) => console.log(data))
    .then(() => navigate('/first-story', { state: requiredUserInput }))
    .catch((error) => console.log(error));
  }

  return ( 
    <FormControl fullWidth variant="standard" >
      <NewUserBox
        component="form" 
        onSubmit={ (e) => handleSubmit(e) } 
        id="new-user-form"
      >
        <IntroForm
          allGenres={ allGenres }
          required={ requiredUserInput }
          onInputChange={ handleUserInput }
          onGenreSelect={ handleGenreSelection }
        />
        <Typography variant="body1">
          Share your literary opinions (optional):
        </Typography>
        <FavoritesForm
          favorites={ favorites }
          onInputChange={ handleUserInput }
        />
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
const SubmitBtn = styled(Button)(submitBtnCss);