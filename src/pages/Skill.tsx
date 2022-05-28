import React from 'react'
import Section from '../components/Section'
import { useTheme } from '../context'
import { baseColorTheme } from '../utils/baseColorHelpers'
import IconBox from './../assets/images/icons-box.png'

const Skill = () => {
    const { state: { theme } } = useTheme()
    const textLight = "text-white"
    const textDark = "text-dark"
    const textTheme = baseColorTheme(theme, textLight, textDark)

    // const burgerEl = React.useRef<HTMLDivElement>(null)
    // const [burgerPosition, setBurgerPosition] = React.useState<number>(0)

    // const handleBurgerHover = (e: React.MouseEvent<HTMLElement>): void => {
    //   setBurgerPosition(e.clientY - (burgerEl.current?.getBoundingClientRect().top || e.clientY))
    // }

    return (
        <Section className='flex flex-col lg:flex-row' odd={false}>
            <div className='min-h-screen flex-1 flex justify-center items-center bg-gray-400'>
                <div className='relative'>
                    <img className='w-60 ' src={IconBox} alt="box1" />
                    <img className='w-60 scale-x-[-1]' src={IconBox} alt="box1" />
                    <img className='w-60 ' src={IconBox} alt="box1" />
                </div>
            </div>
            <div className={`${textTheme}`}>kanan</div>
        </Section>
    )
}

export default Skill