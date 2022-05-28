import * as React from 'react'

import { THEME_LIGHT } from '../const/action'
import { useTheme } from '../context'
import styles from './../styles/Toggle.module.css'

interface ToggleProps {
    toggleOpen: boolean
    onClick: () => void
}

const BurgerToggle: React.FC<ToggleProps> = ({ toggleOpen, onClick }) => {
    const { state } = useTheme()
    const { theme } = state
    const bgToggleStrip = theme === THEME_LIGHT ? "bg-black" : "bg-white"

    return (
        <div className={`${toggleOpen ? styles['active'] : ""} lg:hidden space-y-1 cursor-pointer ${styles['toggle-link']} absolute right-2 z-30`}
            onClick={onClick}
        >
            <div className={`h-1 w-6 rounded-full ${bgToggleStrip}`}></div>
            <div className={`h-1 w-6 rounded-full ${bgToggleStrip}`}></div>
            <div className={`h-1 w-6 rounded-full ${bgToggleStrip}`}></div>
        </div>
    )
}

export default BurgerToggle