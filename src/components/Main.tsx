import React from 'react'
import { useTheme } from '../context'
import { THEME_LIGHT } from './../const/action';

export default function Main(){
  const { state } = useTheme()
  const { theme } = state
  const colorTheme = theme === THEME_LIGHT 
    ? "text-black"
    : "text-white"

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
      <div className='flex flex-col justify-center '>
        kanan
      </div>
      </section>
    </div>
  )
}
