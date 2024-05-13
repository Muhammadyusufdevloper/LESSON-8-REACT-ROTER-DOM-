import React from 'react'
import Hero from '../../components/hero'
import Product from '../../components/product'
import About from '../../components/about'
import Premium from '../../components/premium'
import Choose from '../../components/choose'

const Home = () => {
  return (
    <>
        <main>
        <Hero/>
        <Product/>
        <About/>
        <Premium/>
        <Choose/>
      </main>
    </>
  )
}

export default Home