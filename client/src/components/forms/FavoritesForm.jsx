import React from 'react';
import { Box, styled } from '@mui/material';
import { favoritesBoxCss } from '../../styles/start/newUserCss';
import FavInput from './FavInput';

const FavoritesForm = ({ favorites, onInputChange }) => {
  const { favoriteAuthor, favoriteBook, favoriteAudiobook, favoritePodcast } = favorites;

  return (
    <>
      <FavoritesBox>
          <FavInput 
            name="favoriteAuthor" 
            label="Favorite Author" 
            value={ favoriteAuthor } 
            onInputChange={ onInputChange }
          />
          <FavInput 
            name="favoriteBook" 
            label="Favorite Book" 
            value={ favoriteBook } 
            onInputChange={ onInputChange }
          />
          <FavInput 
            name="favoriteAudiobook" 
            label="Favorite Audiobook" 
            value={ favoriteAudiobook } 
            onInputChange={ onInputChange }
          />
          <FavInput 
            name="favoritePodcast" 
            label="Favorite Podcast" 
            value={ favoritePodcast } 
            onInputChange={ onInputChange }
          />
        </FavoritesBox>
    </>
  )
}

export default FavoritesForm

const FavoritesBox = styled(Box)(favoritesBoxCss);