import * as React from 'react'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

import styles from './../styles/Sidebar.module.css'

import { useTheme } from '../context';
import { THEME_LIGHT } from './../const/action';

interface Props {
  text: string
  className?: string
  Icons: IconType
  href: string
  isOpen: boolean
}

const NavList: React.FC<Props> = ({ text, className = "", Icons, href, isOpen }) => {
  const { state } = useTheme()
  const { theme } = state
  const colorTheme = theme === THEME_LIGHT ? "text-dark-base after:bg-dark-base " : "text-white/60 after:bg-[#F5EDED] hover:text-[#F5EDED]"

  return (
    <li
      className={`${className} ${colorTheme} cursor-pointer relative my-2`}>
      <Link to={href} className={` px-4 flex items-center py-2 `}>
        <Icons size={24} className="flex-shrink-0" />
        <span className={`relative after:absolute after:block after:mt-1 after:origin-center after:content-[""] after:w-0 after:h-1 after:rounded-lg after:left-1/2 after:-translate-x-1/2group-hover:after:w-[calc(100%_-_10px)] after:transition-all after:duration-300 transition-all duration-300 ${isOpen ? "ml-4" : "w-0"} whitespace-nowrap overflow-hidden`}>{text}</span>
      </Link>
    </li>
  )
}

export default NavList