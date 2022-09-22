import React, { useEffect, useState } from "react";
import { MenuItem } from '@mui/material'
import { handleGET } from "../helpers/fetchRequests";

const GenreContext = React.createContext()

function GenreProvider({ children }) {
  const [allGenres, setAllGenres] = useState({});
  const [chosenGenre, setChosenGenre] = useState("")

  useEffect(() => {
    handleGET('/genres').then((data) => setAllGenres(data))
    // eslint-disable-next-line
  }, [])

  const handleGenreSelection = (e) => {
    setChosenGenre(e.target.value)
  }

  const genresList = Array.from(allGenres).map((gen) => (
    <MenuItem 
      key={ gen.id } 
      name={ gen.name }
      value={ gen.name }
    >
      { gen.name }
    </MenuItem>
  ))

  const value = { chosenGenre, genresList,handleGenreSelection };

  return (
    <GenreContext.Provider value={ value }>
      { children }
    </GenreContext.Provider>
  )
}

export { GenreContext, GenreProvider }