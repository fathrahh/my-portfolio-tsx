import React from 'react'
import { useTheme } from '../context'
import { baseColorTheme } from '../utils/baseColorHelpers'

export default function Footer() {
    const { state: { theme } } =  useTheme()
    const colorTheme = baseColorTheme(theme)
    const textColor = baseColorTheme(theme, "text-white/40", "text-dark-base")

    return (
        <footer className={`${colorTheme} ${textColor} text-center py-3`}>Create by @fathrahh</footer>
    )
}