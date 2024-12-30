import React from 'react'

const Overview = () => {
  return (
    <div className='w-full h-screen px-16 max-sm:px-5 relative max-sm:h-[60vh] '>
        <h1 className='text-white text-4xl font-medium font-marker text-center mt-20 max-sm:text-3xl '>OverView</h1>
        <div className='w-full h-96 overflow-hidden rounded-3xl relative mt-10'>
        <img className='w-full h-full ' src="https://img.freepik.com/premium-photo/red-background-with-pattern-squares-that-say-x_1290273-4.jpg" alt="" />
        <div className='w-full h-96 bg-transparent absolute top-0 z-10  flex flex-col items-center justify-evenly px-5 '>
          <p className='text-white text-5xl text-center font-medium mt-5 max-md:text-4xl max-sm:text-3xl'>Take Your Skills to Next Level. <br /> Unlock your potential Today  </p>
          <p className='text-lg text-center  text-[#d89c9c] max-sm:text-base '>Let's make those videos, tell those stories, and grow together. Hurry! early bird <br /> access for enlisting in the programs runs out soon</p>
          <button className='px-10 py-1.5 max-sm:w-full   bg-yellow-500 rounded-3xl text-black '>Explore More</button>
        </div>
        </div>
    </div>
  )
}

export default Overview