import React from 'react'
import ProfileCard from '@/components/molecules/ProfileCard'
import Data from '@/components/molecules/Data'
import ProgressCard from '@/components/molecules/ProgressCard'
import ExtraSkills from '@/components/molecules/ExtraSkills'

// En este componente se hace la estructura y fucion de todos los elementos del lado izquierdo de la pagina.
const Index = () => {
  return (
    <div className='flex flex-col w-[305px] h-full items-center justify-start '>
        <ProfileCard/>
        <Data/>
        <ProgressCard utilitConst='Idiomas'/>
        <ProgressCard utilitConst='Lenguajes de Programación'/>
        <ExtraSkills/>
    </div>
  )
}

export default Index
