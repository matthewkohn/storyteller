import React, { useState } from "react";
import { MenuItem } from '@mui/material'

const GenreContext = React.createContext()

function GenreProvider({ children }) {
  const [allGenres, setAllGenres] = useState({});
  const [chosenGenre, setChosenGenre] = useState({
    name: "",
    id: null
  })

  const handleGenreSelection = (e) => {
    const choice = allGenres.find((g) => g.name === e.target.value)
    setChosenGenre(choice)
  }
  console.log(allGenres)

  const genresList = Array.from(allGenres).map((gen) => (
    <MenuItem 
      key={ gen.id } 
      name={ gen.name }
      value={ gen.name }
      divider
    >
      { gen.name }
    </MenuItem>
  ))

  const value = { chosenGenre, genresList, handleGenreSelection, setAllGenres };

  return (
    <GenreContext.Provider value={ value }>
      { children }
    </GenreContext.Provider>
  )
}

export { GenreContext, GenreProvider }