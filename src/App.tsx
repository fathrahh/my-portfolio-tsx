import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useTheme } from './context';
import Footer from './components/Footer';


function App() {
  const { state } = useTheme()

  return (
    <div className={`${state.theme === "LIGHT" ? "bg-slate-200" : "bg-black/90"} flex flex-col relative`}>
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
