import React from 'react'
import { useTheme } from '../context'
import { baseColorTheme } from '../utils/baseColorHelpers'

import Section from '../components/Section'

const About = () => {
    const { state: { theme } } = useTheme()
    const textLight = "text-white"
    const textDark = "text-dark"
    const textTheme = baseColorTheme(theme, textLight, textDark)

    return (
        <Section className={`${textTheme} py-4`} odd={false}>
            <h3 className='text-center text-3xl py-5  font-bold'>About Me</h3>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati minima quos iure quidem dicta vitae ipsum fugit deserunt tenetur.</p>
            </div>
        </Section>
    )
}

export default About