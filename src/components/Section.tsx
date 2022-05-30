import * as React from 'react'
interface SectionProps {
  children: React.ReactNode
  className?: string
  [id: string]: any
}

const Section: React.FC<SectionProps> = ({ children, className, ...rest }) => {
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