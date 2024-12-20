import React from 'react'
import { Filter, HeroSection, ProductsList } from '../../exports'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <div className='px-5 flex justify-between items-center'>
           <Filter/>
        </div>
        <ProductsList/>
    </div>
  )
}

export default Home