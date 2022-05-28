import * as React from 'react'

interface ButtonProps {
    onClick: () => (void | any)
    children: React.ReactNode
    className?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button className={`${className} py-3 w-full rounded-sm`} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: ""
}

export default Button

