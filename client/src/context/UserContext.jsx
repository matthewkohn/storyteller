import React, { useEffect, useState } from "react";
import { handleGET } from "../helpers/fetchRequests";

const UserContext = React.createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    handleGET('/me').then((user) => setUser(user));
  }, [])

  const value = { user, setUser };
  console.log("user from UserContext: ", user)

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }