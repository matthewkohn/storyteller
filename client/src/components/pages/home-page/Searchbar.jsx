import { TextField } from '@mui/material';
import { useState } from 'react';

const Searchbar = () => {
  const [titleInput, setTitleInput] = useState("");

  const handleInputChange = (e) => {
    setTitleInput(e.target.value);
  };

  return (
    <>
      <TextField
        label="Search stories by title"
        size="small"
        value={ titleInput }
        onChange={ (e) => handleInputChange(e) }
      />
    </>
  )
}

export default Searchbar