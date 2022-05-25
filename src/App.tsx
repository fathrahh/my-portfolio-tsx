import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useTheme } from './context';
import Footer from './components/Footer';


function App() {
  // const { state : { theme } } = useTheme()
  return (
    <div className={`flex flex-col relative`}>
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
