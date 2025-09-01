import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import MainBody from './components/MainBody.jsx'
import About from './components/About.jsx'
import Help from './components/Help.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="/analyzer" element={<MainBody />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      
     
      
      

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
