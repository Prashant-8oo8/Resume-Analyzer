import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainBody from './components/MainBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <MainBody/>
    <Footer/>
   
   
     </>

  )
}

export default App
