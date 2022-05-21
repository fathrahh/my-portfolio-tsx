import * as React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

import { useTheme } from '../context'
import { THEME_LIGHT } from '../const/action'

function ThemeToggle () {   
    const { state , dispatch } = useTheme()
    const { theme } = state

    return (
            <div 
                className="bg-gray-500 rounded-full p-1 flex gap-1 relative group cursor-pointer"
                onClick={()=> dispatch(theme)}>
                <div 
                    className={`${theme === THEME_LIGHT ? "translate-x-6" : "translate-x-0"} transition-transform duration-300 absolute w-5 h-5 bg-white rounded-full group-hover:shadow-all group-hover:shadow-cyan-300`}></div>
                <BiMoon className='w-5 h-5'/>
                <BiSun className='w-5 h-5'/>
            </div>
    )
}

export default ThemeToggle