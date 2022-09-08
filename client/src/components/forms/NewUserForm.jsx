// import React, { useContext, useEffect, useState } from 'react';
import React, { useContext, useState } from 'react';
import { Box, Button, FormControl, styled, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { newUserBoxCss, submitBtnCss } from '../../styles/start/newUserCss';
import { handleAPI } from '../../helpers/fetchRequests';
import { UserContext } from '../../context/UserContext';
import FavoritesForm from './FavoritesForm';
import IntroForm from './IntroForm';

const NewUserForm = () => {
  const { user } = useContext(UserContext);
  // const [allGenres, setAllGenres] = useState({});

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
  // const navigate = useNavigate();

  const handleUserInput = (e) => {
    const inputName = e.target.name;
    if (inputName === "penName" || inputName === "genre") {
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

  // useEffect(() => {
  //   // fetch genres
  //   setAllGenres({})
  //   console.log("New User useEffect", allGenres)
  //   // eslint-disable-next-line
  // }, [])

  const userFavoritesJson = {
    user_id: user.id,
    favorite_author: favorites.favoriteAuthor,
    favorite_book: favorites.favoriteBook,
    favorite_audiobook: favorites.favoriteAudiobook,
    favorite_podcast: favorites.favoritePodcast
  }
  // console.log("userJson from NewUserForm: ", userFavoritesJson)

  const authorJson = {
    name: requiredUserInput.penName
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Promise.all([
      handleAPI('/authors', "POST", authorJson),
      handleAPI('/profiles', "POST", userFavoritesJson)
      
    ])
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
    
  //   // POST create author
  //   // pass genre to Story component, fetch new story from 'genres/:id/stories/new'
  //   // navigate client to '/stories/new'
  }

  // const genresList = genres.map((genre) => (
  //   <MenuItem 
        // key={ genre.id } 
        // name={ genre.name }
        // value={ genre.name }
        // >
        // { genre.name }
        // </MenuItem>
  // ))


  return ( 
    <FormControl variant="standard" >
      <NewUserBox
        component="form" 
        onSubmit={ (e) => handleSubmit(e) } 
        id="new-user-form"
      >
        <IntroForm
          required={ requiredUserInput }
          onInputChange={ handleUserInput }
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