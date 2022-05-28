import * as React from 'react'

interface MyLinkProps {
    href: string
    children: any
}

const MyLink: React.FC<MyLinkProps> = ({ href, children }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}

export default MyLink