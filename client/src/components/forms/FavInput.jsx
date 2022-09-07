import React from 'react';
import { styled, TextField } from '@mui/material';
import { favInputCss } from '../../styles/start/newUserCss';

const FavInput = ({ name, label, onInputChange, value }) => {
  return (
    <>
      <FavoriteInput
        name={ name }
        label={ label }
        onChange={ (e) => onInputChange(e) }
        value={ value }
        size="small"
        variant="standard"
      />
    </>
  )
}

export default FavInput

const FavoriteInput = styled(TextField)(favInputCss);