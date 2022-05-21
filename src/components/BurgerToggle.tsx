import * as React from 'react'
import styles from './../styles/Toggle.module.css'


interface ToggleProps {
    toggleOpen : boolean
    onClick : () => void
}

const BurgerToggle : React.FC<ToggleProps> = ({toggleOpen,onClick}) => {
    return (
        <div className={`${toggleOpen ? styles['active'] : ""} lg:hidden space-y-1 cursor-pointer ${styles['toggle-link']} absolute right-2 z-10`}
            onClick={onClick}
        >
            <div className='h-1 w-6 rounded-full bg-black'></div>
            <div className='h-1 w-6 rounded-full bg-black'></div>
            <div className='h-1 w-6 rounded-full bg-black'></div>
        </div>
    )
}

export default BurgerToggle