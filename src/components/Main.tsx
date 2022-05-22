import * as React from 'react'
import { useTheme } from '../context'
import { THEME_LIGHT } from './../const/action';
import BurgerGrayscale from './../assets/images/burger-grayscale-removebg.png'
import BurgerReal from './../assets/images/burger-removebg.png'

export default function Main(){
  const { state } = useTheme()
  const burgerEl = React.useRef<HTMLDivElement>(null)
  const [ burgerPosition, setBurgerPosition ] = React.useState<number>(0)
  const { theme } = state
  const colorTheme = theme === THEME_LIGHT 
    ? "text-black"
    : "text-white"

  const handleBurgerHover = (e : React.MouseEvent<HTMLElement>) : void => {
   setBurgerPosition(e.clientY - (burgerEl.current?.getBoundingClientRect().top || e.clientY))
  }

  return (
    <div className={`${colorTheme} container mx-auto flex-1 `}>
      <section className='h-screen flex flex-col lg:flex-row'>
      {/* left */}
      <div className='h-full flex flex-col justify-center flex-1'>
        <h1 className='text-6xl font-bold text-orange-400'>Hello</h1>
        <h1 className='text-6xl font-bold'>Hello</h1>
        <h1 className='text-6xl font-bold'>Hello</h1>
        <h1 className='text-6xl font-bold'>Hello</h1>
        <h1 className='text-6xl font-bold'>Hello</h1>
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
      </section>
    </div>
  )
}
