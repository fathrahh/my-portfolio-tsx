import * as React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

import { useTheme } from '../context'
import { THEME_LIGHT } from '../const/action'
import { baseColorTheme } from '../utils/baseColorHelpers'

type ThemeToggleProps = {
    isOpen: boolean
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isOpen = false }) => {
    const { state: { theme }, dispatch } = useTheme()
    const changeTheme = () => dispatch(theme)
    const textLight = "text-white"
    const textDark = "text-dark"
    const textTheme = baseColorTheme(theme, textLight, textDark)

    if (!isOpen) {
        return (
            <div
                className={`${textTheme} p-1  group cursor-pointer flex justify-center items-center`}
                onClick={() => dispatch(theme)}>
                {theme === THEME_LIGHT
                    ? <BiMoon size={24} onClick={changeTheme} />
                    : <BiSun size={24} onClick={changeTheme} />
                }
            </div>
        )
    }

    return (
        <div
            className="w-[52px] bg-gray-500 rounded-full p-1 flex gap-1 relative group cursor-pointer"
            onClick={changeTheme}>
            <div
                className={`${theme === THEME_LIGHT ? "translate-x-6" : "translate-x-0"} transition-transform duration-300 absolute w-5 h-5 bg-white rounded-full group-hover:shadow-all group-hover:shadow-cyan-300`}></div>
            <BiMoon className='w-5 h-5' />
            <BiSun className='w-5 h-5' />
        </div>
    )
}

export default ThemeToggle