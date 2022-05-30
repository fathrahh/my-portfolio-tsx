import * as React from 'react'
interface SectionProps {
  children: React.ReactNode
  className?: string
  [id: string]: any
}

const Section: React.FC<SectionProps> = ({ children, className, ...rest }) => {
  //   Light & Dark Mode logic
  return (
    <section className={`${className} h-max container mx-auto min-h-screen`}{...rest}>
      {children}
    </section>
  )
}

Section.defaultProps = {
  odd: true,
  className: ""
}

export default Section