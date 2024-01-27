import { Theme } from "@react-navigation/native";
import { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { themeReducer } from "./themeReducer";

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
}

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors: {
        primary: 'red',
        background: 'hsl(0, 0%, 100%)',
        card: 'green',
        text: 'red',
        border: 'orange',
        notification: 'teal'
    }
}

const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors: {
        primary: 'red',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal'
    }
}

export const ThemeContext = createContext({} as ThemeContextProps );

export const ThemeProvider = ({ children }: any) => {

    const colorsScheme = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer, (colorsScheme == 'dark') 
        ? darkTheme 
        : lightTheme
    )

    useEffect(() => {
      (colorsScheme == 'light')
        ? setLightTheme()
        : setDarkTheme()
    }, [colorsScheme])
    

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme', payload: darkTheme});
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme', payload: lightTheme});
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}