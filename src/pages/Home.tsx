import React from 'react'
import styles from './../styles/Main.module.css'

import PictSVG2 from './../assets/images/sample-pict2.svg'
import { useTheme } from '../context'
import { baseColorTheme, reverseColorTheme } from '../utils/baseColorHelpers'

import MyLink from '../components/MyLink'
import Section from '../components/Section'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Button from '../components/Button'

const Home = () => {
    const { state: { theme } } = useTheme()
    const textLight = "text-white"
    const textDark = "text-dark"
    const textTheme = baseColorTheme(theme, textLight, textDark)
    const reverseTheme = reverseColorTheme(theme)

    return (
        <Section className='h-screen flex flex-col lg:flex-row -mt-10' id="home">
            {/* left */}
            <div className='flex flex-col justify-center flex-1 relative z-0'>
                <h1 className={`text-3xl lg:text-5xl font-bold ${textTheme} my-5 uppercase break-words after:content-[""] after:h-1 after:w-12 after:rounded-lg after:mt-1 after:${reverseTheme} after:absolute z-10`}>
                    Muhammad
                    <p className={`text-orange-500 my-2 ${styles['text-linear-gradient']}`}>  Fathurrahman</p>
                </h1>
                <div className='absolute w-72 h-72 right-1/3 translate-x-10 top-1/2 -translate-y-1/2 '>
                    <img src={PictSVG2} alt="icon" />
                </div>
                <div className={`${textTheme} flex gap-4`}>
                    <MyLink href='https://github.com/fathrahh'>
                        <BsGithub size={24} />
                    </MyLink>
                    <MyLink href='https://github.com/fathrahh'>
                        <BsLinkedin size={24} />
                    </MyLink>

                </div>
            </div>
            {/* Right */}
            <div className='flex flex-col justify-center space-y-4'>
                <h3 className={` text-2xl font-bold ${textTheme} uppercase`}>Freelance Front End Developer</h3>
                <p className={`${textTheme} w-96`}>Welcome to my personal portofolio website I am a student who has more interest in software development ! Please check my CV on the button below</p>
                <div className='flex justify-around gap-4'>
                    <Button className='bg-gray-500' onClick={() => alert()}>Preview CV</Button>
                    <Button className='bg-gray-500' onClick={() => alert()}>Download CV</Button>
                </div>
                {/* <div
            className='relative overflow-hidden '
            onMouseMove={handleBurgerHover}
            onMouseOut={() => setBurgerPosition(0)}
            ref={burgerEl}
          >
            <img src={BurgerGrayscale} className="object-cover scale-125" alt="gcburger"/>
            <div className='absolute top-0 overflow-hidden w-full' style={{height: `${burgerPosition}px`}}>
              <img src={BurgerReal} className="scale-125" alt="burger-real"/> 
            </div>
            
          </div> */}
            </div>
        </Section>
    )
}

export default Home