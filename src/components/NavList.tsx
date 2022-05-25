import * as React from 'react'
import { useTheme } from '../context';
import { THEME_LIGHT } from './../const/action';

interface Props {
    text : string
    className? : string
    href : string
  }

const NavList : React.FC<Props> = ({text, className = "" , href}) => {
  const { state } = useTheme()
  const { theme } = state
  const colorTheme = theme === THEME_LIGHT ? "text-black after:bg-black " : "text-white/60 after:bg-[#F5EDED] hover:text-[#F5EDED]"

  return (
    <li 
      className={`${className} ${colorTheme} cursor-pointer relative after:left-1/2 after:-translate-x-1/2 after:absolute after:block after:mt-1 after:origin-center after:content-[''] after:w-0 after:h-1 after:rounded-lg hover:after:w-[calc(100%_-_10px)] after:transition-all after:duration-300 transition-colors duration-300`}>
        <a href={href}>{text}</a>
    </li>
  )
}

export default NavList