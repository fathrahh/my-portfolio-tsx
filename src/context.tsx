import * as React from 'react'
import { THEME_LIGHT, THEME_DARK } from './const/action';

type State = {theme: string}
type Dispatch = (action: string) => void
type ThemeProviderProps = {children : React.ReactNode}

const initialState : State = {
    theme : "LIGHT"
}

const ThemeContext = React.createContext<{state: State, dispatch: Dispatch} | undefined >(undefined)

function themeReducer(state : State ,action : string) : State{
    switch(action){
        case THEME_DARK:
            return { theme : "LIGHT"}
        case THEME_LIGHT:
            return { theme : "DARK"}
        default :
            return state
    }
}

function ThemeProvider({children} : ThemeProviderProps){
    const [ state, dispatch ] = React.useReducer(themeReducer,initialState)

    const value = { state, dispatch }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme(){
    const context = React.useContext(ThemeContext)
    if(context === undefined){
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export { ThemeProvider, useTheme }

