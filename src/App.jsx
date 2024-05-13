import React from 'react'
import Header from './layout/header'
import Footer from './layout/footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import About from './pages/about'
import NotFound from './pages/notFound/Index'
import Single from './pages/single'

const App = () => {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/single/:id' element={<Single/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App