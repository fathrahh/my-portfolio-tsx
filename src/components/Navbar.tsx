import * as React from 'react' 

import { useTheme } from '../context'
import { THEME_LIGHT } from './../const/action'

import NavList from './NavList'
import ThemeToggle from './ThemeToggle'
import BurgerToggle from './BurgerToggle'
import Sidebar from './Sidebar'
import { baseColorTheme } from '../utils/baseColorHelpers'

const Navbar = () => {
    const [toggleOpen, setToggleOpen] = React.useState<boolean>(false)
    const { state : { theme } } = useTheme()

    const colorTheme = baseColorTheme(theme)

    React.useEffect(() => {
      const handleResize = () : void => {
          window.innerWidth < 984 && setToggleOpen(false)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return(
        <>
            <Sidebar toggleOpen={toggleOpen} />
            <nav className={`py-6 lg:py-10 absolute top-0 inset-x-0 ${colorTheme}`}>
                <div className='container mx-auto'>
                    <div className="flex justify-between items-center relative">
                        <h1 className={`text-xl font-bold ${theme=== THEME_LIGHT ? "text-black" : "text-white"} cursor-pointer`}>
                            M
                            <span className='text-lg'>F</span>
                            <span className='text-base'>r</span> 
                            .
                        </h1>
                        <ul className="lg:flex space-x-10 text-md font-semibold items-center hidden">
                            <NavList text="Home" href="#home"/>
                            <NavList text="About Me" href="#about-me"/>
                            <NavList text="Contact" href="#contact"/>
                        </ul>
                        <div className='hidden lg:inline'>
                            <ThemeToggle/>
                        </div>
                        <BurgerToggle 
                            toggleOpen={toggleOpen}
                            onClick={() => setToggleOpen(!toggleOpen)}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;