import { ThemeState } from "./ThemeContext";

type ThemeAction =
    | { type: 'set_light_theme', payload: ThemeState }
    | { type: 'set_dark_theme', payload: ThemeState }

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return state

        case 'set_dark_theme':
            return state
    
        default:
            return state;
    }

}