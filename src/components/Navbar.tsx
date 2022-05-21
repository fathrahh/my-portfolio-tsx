import * as React from 'react' 

import { useTheme } from '../context'
import { THEME_LIGHT } from './../const/action'

import NavList from './NavList'
import ThemeToggle from './ThemeToggle'
import BurgerToggle from './BurgerToggle'

const Navbar = () => {
    const [toggleOpen, setToggleOpen] = React.useState<boolean>(false)
    const [windowSize, setWindowSize] = React.useState<number>(0)
    const { state } = useTheme()
    const { theme } = state

    React.useEffect(() => {
      const handleResize = () : void => {
          setWindowSize(window.innerWidth)
          windowSize < 984 && setToggleOpen(false)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    

    return(
        <>
            <div className={`${toggleOpen ? 'inline' : 'hidden'} absolute z-[10] bg-green-500 inset-x-0 h-4/6 `}>
                <div className="w-full h-4/6"></div>
                <div></div>
                <div></div>
            </div>
            <nav className="py-4 lg:py-10 absolute top-0 inset-x-0">
                <div className='container mx-auto'>
                    <div className="flex justify-between items-center relative">
                        <h1 className={`text-xl font-bold ${theme=== THEME_LIGHT ? "text-black" : "text-white"} cursor-pointer`}>
                            M
                            <span className='text-lg'>F</span>
                            <span className='text-base'>r</span> 
                            .
                        </h1>
                        <ul className="lg:flex space-x-10 text-md font-semibold items-center hidden">
                            <NavList text="Home"/>
                            <NavList text="About Me"/>
                            <NavList text="Contact"/>
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