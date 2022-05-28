import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useTheme } from './context'
import { baseColorTheme } from './utils/baseColorHelpers'


function App() {
  const { state: { theme } } = useTheme()

  const darkMode = "bg-dark-base"
  const colorTheme = baseColorTheme(theme, darkMode)

  return (
    <Router>
      <div className={`${colorTheme} flex relative min-h-screen overflow-x-hidden`}>
        <Navbar />
        <div className='flex-1'>
          <Main />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
