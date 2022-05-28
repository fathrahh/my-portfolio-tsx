import * as React from 'react'
import { FaHome, FaReact, FaUserAstronaut } from 'react-icons/fa'

import { useTheme } from './../context'
import { THEME_LIGHT } from './../const/action'
import styles from './../styles/Sidebar.module.css'

import NavList from './NavList'
import ThemeToggle from './ThemeToggle'
import BurgerToggle from './BurgerToggle'
import { baseColorTheme, reverseColorTheme } from '../utils/baseColorHelpers'

const Navbar = () => {
    const [toggleOpen, setToggleOpen] = React.useState<boolean>(false)
    const { state: { theme } } = useTheme()
    const shadowTheme = baseColorTheme(theme, "shadown-zink-800", "shadow-gray-400")
    const colorTheme = baseColorTheme(theme)
    const reverseTheme = reverseColorTheme(theme)

    const handleToggle = () => setToggleOpen(!toggleOpen)

    React.useEffect(() => {
        const handleResize = (): void => {
            window.innerWidth < 984 && setToggleOpen(false)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <nav className={`py-3 lg:fixed sticky top-0 bottom-0 rounded-r-lg ${colorTheme} ${shadowTheme} z-10 shadow-all-sm`}>
                <div className="flex flex-col relative h-full ">
                    <div
                        className='self-end mr-5 my-4 cursor-pointer'
                        onClick={handleToggle}
                    >
                        <div className={`${styles["arrow"]} rounded-lg w-5 h-1 ${reverseTheme} relative`}>
                            {/* <div className={`absolute w-2 h-1 ${reverseTheme}`}></div> */}
                            <div className={`${toggleOpen && styles["open"]} rounded-lg top-[calc(50%_+_2px)]  absolute w-3 h-1 ${reverseTheme}`}></div>
                            <div className={`${toggleOpen && styles["open"]} rounded-lg bottom-[calc(50%_+_2px)]  absolute w-3   h-1 ${reverseTheme}`}></div>
                        </div>
                    </div>
                    <div className='text-center p-1'>
                        <h1 className={`${theme === THEME_LIGHT ? "text-black" : "text-white"} cursor-pointer font-bold `}>
                            <span className={`${toggleOpen ? "text-4xl" : "text-xl"} transition-all`}>M</span>
                            <span className={`text-xl`}>F.</span>
                        </h1>
                    </div>
                    <div className='h-8 items-center justify-center flex'>
                        <ThemeToggle isOpen={toggleOpen} />
                    </div>
                    <ul className={`${toggleOpen ? "w-44" : "w-14"} overflow-hidden my-auto transition-all duration-300 text-md font-semibold`}>
                        <NavList isOpen={toggleOpen} Icons={FaHome} text="Home" href="/" />
                        <NavList isOpen={toggleOpen} Icons={FaUserAstronaut} text="About Me" href="/about" />
                        <NavList isOpen={toggleOpen} Icons={FaReact} text="Skill" href="/skill" />
                    </ul>
                    {/* <BurgerToggle
                    toggleOpen={toggleOpen}
                    onClick={() => setToggleOpen(!toggleOpen)}
                /> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;