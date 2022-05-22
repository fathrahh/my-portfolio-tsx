import * as React from 'react'
import styles from './../styles/Sidebar.module.css'
import SidebarList from './SidebarList'


interface SidebarProps {
    toggleOpen : boolean
}

const Sidebar : React.FC<SidebarProps> = ({toggleOpen}) => {
    return (
        <aside className={`${toggleOpen ? 'w-full' : 'w-0'} right-0 block lg:hidden absolute z-[10] overflow-hidden h-screen transition-all duration-200`}>
            <div className={`relative w-screen h-full ${styles['sidebar']} ${toggleOpen && styles['open']}`}>
                <div className="bg-black absolute"></div>
                <div className="bg-orange-400 absolute"></div>
                <div className="bg-green-400 absolute flex flex-col items-center py-14 space-y-5">
                    <SidebarList text="Home"/>
                    <SidebarList text="About Me"/>
                    <SidebarList text="Contact "/>
                </div>
            </div>
        </aside>
    )
}

Sidebar.defaultProps = {
    toggleOpen : false
}

export default Sidebar