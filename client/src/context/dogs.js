import React, { useState } from "react"

const DogsContext = React.createContext();

function DogsProvider({ children }) {
  const [dogs, setDogs] = useState(null);

  return (
    <DogsContext.Provider value={{ dogs, setDogs }}>
      {children}
    </DogsContext.Provider>
  )
}

export { DogsContext, DogsProvider };