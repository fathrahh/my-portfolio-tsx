import * as React from 'react'
import { useTheme } from '../context'
import { THEME_LIGHT } from './../const/action';
import BurgerGrayscale from './../assets/images/burger-grayscale-removebg.png'
import BurgerReal from './../assets/images/burger-removebg.png'
import Section from './Section';

export default function Main(){
  const { state : { theme } } = useTheme()
  const burgerEl = React.useRef<HTMLDivElement>(null)
  const [ burgerPosition, setBurgerPosition ] = React.useState<number>(0)
  const colorTheme = theme === THEME_LIGHT 
    ? "text-black"
    : "text-white"

  const handleBurgerHover = (e : React.MouseEvent<HTMLElement>) : void => {
   setBurgerPosition(e.clientY - (burgerEl.current?.getBoundingClientRect().top || e.clientY))
  }

  return (
    <main className="flex-1 py-12 lg:py-0 m-0">
      <Section className='h-screen flex flex-col lg:flex-row ' id="home">
        {/* left */}
        <div className='flex flex-col justify-center flex-1'>
          <h3 className='text-xl font-bold text-white uppercase'>Freelance Front End Developer</h3>

          <h1 className='text-3xl lg:text-5xl font-bold text-white my-5 uppercase break-words'>
            Hello , I&lsquo;m
            <span className='text-orange-500 '>  Fathurrahman</span>
          </h1>
        </div> 
        {/* Right */}
        <div className='flex flex-col justify-center'>
          <div
            className='relative overflow-hidden '
            onMouseMove={handleBurgerHover}
            onMouseOut={() => setBurgerPosition(0)}
            ref={burgerEl}
          >
            <img src={BurgerGrayscale} className="object-cover scale-125" alt="gcburger"/>
            <div className='absolute top-0 overflow-hidden w-full' style={{height: `${burgerPosition}px`}}>
              <img src={BurgerReal} className="scale-125" alt="burger-real"/> 
            </div>
            
          </div>
        </div>
      </Section>
      <Section odd={false} id="about-me">

      </Section>
    </main>
  )
}
