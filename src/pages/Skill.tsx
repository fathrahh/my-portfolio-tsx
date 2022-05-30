import * as React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'

import Section from '../components/Section'
import { useTheme } from '../context'
import { baseColorTheme } from '../utils/baseColorHelpers'
import SkillCard from '../components/SkillCard'

const Skill = () => {
    const { state: { theme } } = useTheme()
    const textLight = "text-white"
    const textDark = "text-dark"
    const shadowTheme = baseColorTheme(theme, "shadow-dark", "shadow-gray-400")
    const textTheme = baseColorTheme(theme, textLight, textDark)

    return (
        <Section className={`${textTheme} min-h-screen`}>
            <h1></h1>
            <div className="flex flex-nowrap lg:w-1/3 bg-gray-600 mt-8">
                <div className='cursor-pointer p-3 flex-1 flex-nowrap text-center '>Front End</div>
                <div className='p-3 flex-1 text-center '>BackEnd</div>
                <div className='p-3 flex-1 text-center '>Other</div>
            </div>
            <div className={`flex-1`}>
                <small className='italic block my-5'>Click Card for more info</small>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
                    <SkillCard Icon={AiFillHtml5} text="HTML" />
                    <SkillCard Icon={AiFillHtml5} text="HTML" />
                    <SkillCard Icon={AiFillHtml5} text="HTML" />
                    <SkillCard Icon={AiFillHtml5} text="HTML" />
                </div>
            </div>

        </Section>
    )
}

export default Skill