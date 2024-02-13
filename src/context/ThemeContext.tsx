import { Theme } from "@react-navigation/native";
import { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme, themeReducer } from "./themeReducer";

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    inputBackground: string;
}

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
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
        dispatch({type: 'set_dark_theme'});
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'});
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