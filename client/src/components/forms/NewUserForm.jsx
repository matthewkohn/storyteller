// import React, { useContext, useEffect, useState } from 'react';
import React, { useContext } from 'react'
import { Box, Button, FormControl, Select, styled, TextField, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { favInputCss, favoritesBoxCss, newUserBoxCss, primaryItemsCss, submitBtnCss } from '../../styles/start/newUserCss';
import { handleAPI } from '../../helpers/fetchRequests';
import { UserContext } from '../../context/UserContext';

const NewUserForm = ({ required, favorites, onInputChange }) => {
  const { user } = useContext(UserContext);
  // const [allGenres, setAllGenres] = useState({});
  const { favoriteAuthor, favoriteBook, favoriteAudiobook, favoritePodcast } = favorites;
  const { penName, genre } = required;

  // useEffect(() => {
  //   // fetch genres
  //   setAllGenres({})
  //   console.log("New User useEffect", allGenres)
  //   // eslint-disable-next-line
  // }, [])

  console.log("required from NewUserForm: ", required)
  console.log("favorites from NewUserForm: ", favorites)

  const userFavoritesJson = {
    user_id: user.id,
    favorite_author: favoriteAuthor,
    favorite_book: favoriteBook,
    favorite_audiobook: favoriteAudiobook,
    favorite_podcast: favoritePodcast
  }
  // console.log("userJson from NewUserForm: ", userFavoritesJson)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAPI(`/profiles`, "POST", userFavoritesJson)
    .then((res) => {
      if (res.ok) {
        res.json().then(console.log)
      } else {
        console.log(res)
      }
    })
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

  const favInputComponent = (name, value, label) => {
    return (
      <FavInput
        name={ name }
        value={ value }
        label={ label }
        size="small"
        onChange={ (e) => onInputChange(e) }
        variant="standard"
      />
    )
  }


  return ( 
    <FormControl variant="standard" >
      <NewUserBox
        component="form" 
        onSubmit={ (e) => handleSubmit(e) } 
        id="new-user-form"
      >
        <PrimaryItems>
          <Typography variant="body1">Choose your first alias</Typography>
          <TextField 
            autoFocus
            required
            name="penName"
            value={ penName }
            onChange={ (e) => onInputChange(e) }
            label="Pen Name" 
            variant="standard" 
          />
        </PrimaryItems>
        <PrimaryItems>
          <Typography variant='body1'>Choose a Genre</Typography>
          <Select 
            // required
            label="Genres" 
            value={ genre } 
            onChange={ (e) => onInputChange(e) } 
          >
            {/* { genresList }    */}
          </Select> 
        </PrimaryItems>
        <Typography variant="body1">Share your literary opinions (optional):</Typography>
        <FavoritesBox>
          { favInputComponent("favoriteAuthor", favoriteAuthor, "Favorite Author") }
          { favInputComponent("favoriteBook", favoriteBook, "Favorite Book") }
          { favInputComponent("favoriteAudiobook", favoriteAudiobook, "Favorite Audiobook") }
          { favInputComponent("favoritePodcast", favoritePodcast, "Favorite Podcast") }
        </FavoritesBox>
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
const FavoritesBox = styled(Box)(favoritesBoxCss);
const FavInput = styled(TextField)(favInputCss);
const PrimaryItems = styled(Box)(primaryItemsCss);