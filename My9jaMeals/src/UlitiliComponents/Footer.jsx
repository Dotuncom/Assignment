import React from 'react'
import ReactLogo from '../assets/react.svg'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between md:flex-row md:p-10 items-center bg-green-500  sm:h-[14rem] p-4'>
      <div className='flex flex-col sm:flex-col gap-4 items-center' >
        <p className='text-white'>quick link</p>
        <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Meals</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
      </div>
      <div className='flex flex-row justify-center items-center md:flex-col md:text-2xl'>
        <img src={ReactLogo} width={20} className='rounded-full'/>
        <p className='text-center text-[12px]'>all right reserved copyright@nhub dotun</p>
      </div>
  </div>
  )
}

export default Footer