import { ThemeState } from "./ThemeContext";

type ThemeAction =
    | { type: 'set_light_theme'}
    | { type: 'set_dark_theme'}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    inputBackground: 'hsl(0, 0%, 100%)',
    colors: {
        primary: 'red',
        background: 'hsl(0, 0%, 98%)',
        card: 'hsl(0, 0%, 98%)',
        text: 'hsl(200, 15%, 8%)',
        border: 'orange',
        notification: 'teal'
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    inputBackground: 'hsl(209, 23%, 22%)',
    colors: {
        primary: 'white',
        background: 'hsl(207, 26%, 17%)',
        card: 'hsl(207, 26%, 17%)',
        text: 'hsl(0, 0%, 100%)',
        border: 'orange',
        notification: 'teal'
    }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return {
                ...lightTheme
            }

        case 'set_dark_theme':
            return {
                ...darkTheme
            }
    
        default:
            return {
                ...lightTheme
            };
    }

}