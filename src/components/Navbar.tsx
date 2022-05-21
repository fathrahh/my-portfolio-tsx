import * as React from 'react' 

import { useTheme } from '../context'
import { THEME_LIGHT } from './../const/action';

import NavList from './NavList'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    // const [settingActive, setSettingActive] = useState(false)
    const { state } = useTheme()
    const { theme } = state

    return(
        <nav className="py-10">
            <div className='container mx-auto'>
                <div className="flex justify-between items-center">
                    <h1 className={`text-xl font-bold ${theme=== THEME_LIGHT ? "text-black" : "text-white"}`}>Fathrahh</h1>
                    <ul className="lg:flex space-x-10 text-md font-semibold items-center hidden">
                        <NavList text="Home"/>
                        <NavList text="About Me"/>
                        <NavList text="Contact"/>
                    </ul>
                    <div className='hidden lg:inline'>
                        <ThemeToggle/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;