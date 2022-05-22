import * as React from 'react'

interface SidebarList{
    text : string
    className? : string
}

const SidebarList : React.FC<SidebarList> = ({text,className}) => {
    return (
        <div className=''>
            <span>{text}</span>
        </div>
    )
}

SidebarList.defaultProps = {
    text: '',
    className: ''
}

export default SidebarList
