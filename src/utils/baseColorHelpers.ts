import { THEME_LIGHT } from "../const/action"

export const baseColorTheme = (theme : string , darkMode? :string, lightMode? :string ) => {
    return theme === THEME_LIGHT
        ?  lightMode || "bg-white"
        :  darkMode || "bg-dark"
}

export const reverseColorTheme = (theme : string , darkMode? :string, lightMode? :string ) => {
    return theme === THEME_LIGHT
        ?  darkMode || "bg-dark"
        :  lightMode || "bg-white"
} 
