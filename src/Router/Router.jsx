import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Trips from '../pages/Trips'
import PageNotFound from '../pages/PageNotFound.jsx'

export default function Router() {
  return (
    <Routes>
      
      <Route path ='/' element={<Home/>} />
      <Route path ='/about-us' element={<About/>} />
      <Route path ='/contact-us' element= {<Contact/>}/>
      <Route path ='/blog' element= {<Blog/>} /> 
      <Route path ='/plan-trip-now' element= {<Trips/>} />  


      <Route path='*' element={<PageNotFound/>} />  
   

    </Routes>
  )
}
