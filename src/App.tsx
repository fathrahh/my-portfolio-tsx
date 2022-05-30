import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useTheme } from './context'
import { baseColorTheme } from './utils/baseColorHelpers'


function App() {
  const { state: { theme } } = useTheme()
  const colorTheme = baseColorTheme(theme, "bg-dark-base")

  return (
    <Router>
      <div className={`${colorTheme} h-screen flex relative  overflow-x-hidden`}>
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
