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
            <h3 className='text-center font-bold'>About Me</h3>
            <div>
                all about us
            </div>
        </Section>
    )
}

export default About