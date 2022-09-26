import React, { useEffect, useState } from "react";
import { MenuItem } from '@mui/material'
import { handleGET } from "../helpers/fetchRequests";

const GenreContext = React.createContext()

function GenreProvider({ children }) {
  const [allGenres, setAllGenres] = useState({});
  const [chosenGenre, setChosenGenre] = useState({
    name: "",
    id: null
  })

  useEffect(() => {
    handleGET('/genres').then((data) => setAllGenres(data))
    // eslint-disable-next-line
  }, [])

  const handleGenreSelection = (e) => {
    const choice = allGenres.find((g) => g.name === e.target.value)
    setChosenGenre(choice)
  }

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

  const value = { chosenGenre, genresList, handleGenreSelection };

  return (
    <GenreContext.Provider value={ value }>
      { children }
    </GenreContext.Provider>
  )
}

export { GenreContext, GenreProvider }