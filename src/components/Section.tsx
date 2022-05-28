import * as React from 'react'
import { THEME_LIGHT } from '../const/action'
import { useTheme } from '../context'
import { baseColorTheme } from '../utils/baseColorHelpers'

interface SectionProps {
  children: React.ReactNode
  odd?: boolean
  className?: string
  [id: string]: any
}

const Section: React.FC<SectionProps> = ({ children, odd, className, ...rest }) => {
  const { state } = useTheme()
  const { theme } = state

  //   Light & Dark Mode logic

  return (
    <section className={`min-h-screen`} {...rest}>
      <div className={`${className} container mx-auto`}>
        {children}
      </div>
    </section>
  )
}

Section.defaultProps = {
  odd: true,
  className: ""
}

export default Section