import React from 'react'
import MainCard from '@/components/molecules/MainCard'
import Knowledge from '@/components/molecules/Knowledge'
import Education from '@/components/molecules/Education'
import Porfolio from '@/components/molecules/Porfolio'
import Footer from '@/components/molecules/Footer'

// En este componente se hace la carga y fucion de los componentes necesario.
const Index = () => {
  return (
    <div className='bg-gray-100 overflow-y-auto h-screen flex flex-col w-[988px]'>
      <MainCard/>
      <Knowledge/>
      <Education/>
      <Porfolio/>
      <Footer/>
    </div>
  )
}

export default Index
