import {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    profile: false,
    notification: false
}

export const ContextProvider = ({children}) => {
    const [isMenuActive,
        setIsMenuActive] = useState(true);
    const [isClicked,
        setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    return (
        <StateContext.Provider
            value={{
            isMenuActive,
            setIsMenuActive,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);