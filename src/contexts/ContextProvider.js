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
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (mode) => {
        setCurrentMode(mode);

        localStorage.setItem('themeMode', mode);

        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        console.log(color);
        localStorage.setItem('colorMode', color);
        
        setThemeSettings(false);
    }


    return (
        <StateContext.Provider
            value={{
            isMenuActive,
            setIsMenuActive,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize,
            currentColor, 
            currentMode,
            setMode,
            setColor,
            themeSettings, 
            setThemeSettings
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);