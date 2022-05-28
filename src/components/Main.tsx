import * as React from 'react'

import { useTheme } from '../context'
import { baseColorTheme, reverseColorTheme } from '../utils/baseColorHelpers';

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Skill from '../pages/Skill';

export default function Main() {
  const location = useLocation()

  React.useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <main className="flex-1 lg:py-0 ">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
      </Routes>
    </main>
  )
}
