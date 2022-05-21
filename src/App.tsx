import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useTheme } from './context';


function App() {
  const { state } = useTheme()

  return (
    <div className={`${state.theme === "LIGHT" ? "bg-white" : "bg-black"} h-screen`}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
