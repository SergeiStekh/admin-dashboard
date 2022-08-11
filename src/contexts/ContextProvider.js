import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({children}) => {
  const [isMenuActive, setIsMenuActive] = useState(true);
  return (
    <StateContext.Provider value={{isMenuActive, setIsMenuActive}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);