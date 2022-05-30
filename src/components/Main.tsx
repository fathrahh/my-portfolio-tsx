import * as React from 'react'

import { useTheme } from '../context'
import { baseColorTheme, reverseColorTheme } from '../utils/baseColorHelpers';

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Skill from '../pages/Skill';
import Footer from './Footer';

export default function Main() {
  const location = useLocation()

  return (
    <main className="flex-1 flex flex-col lg:py-0 ">
      <div className='flex-1'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}
