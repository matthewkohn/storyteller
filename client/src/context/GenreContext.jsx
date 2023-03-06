// import React, { useState } from "react";

// const GenreContext = React.createContext()

// function GenreProvider({ children }) {
//   const [allGenres, setAllGenres] = useState({});
//   const [chosenGenre, setChosenGenre] = useState({
//     name: "",
//     id: null
//   })

//   const value = { allGenres, setAllGenres, chosenGenre, setChosenGenre };

//   return (
//     <GenreContext.Provider value={ value }>
//       { children }
//     </GenreContext.Provider>
//   )
// }

// export { GenreContext, GenreProvider }