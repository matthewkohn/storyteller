import React, { useState } from "react";

const AuthorContext = React.createContext()

function AuthorProvider({ children }) {
  const [currentAuthor, setCurrentAuthor] = useState({
    name: "",
    id: null
  });

  const value = [currentAuthor, setCurrentAuthor];

  return (
    <AuthorContext.Provider value={ value }>
      { children }
    </AuthorContext.Provider>
  )
}

export { AuthorContext, AuthorProvider }