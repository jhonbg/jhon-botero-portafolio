import React from 'react'
import { TitleSegundario, TextPrincipalTertiary} from '@/components/atoms/titles'
import PorfolioCard from '@/components/molecules/PorfolioCard'
import { Briefcase } from '@/utils/const'

const Index = () => {
  return (
    <div className='flex flex-col items-center bg-gray-100 m-4'>
      <div className='mb-4 mt-4 text-center'>
        <TitleSegundario title='Portafolio' />
        <div className='w-full mt-4 mb-4 pl-[20%] pr-[20%]'>
          <TextPrincipalTertiary 
            text='A continuación, comparto algunos de los proyectos en los que he participado, tanto de forma individual como en colaboración con otros profesionales. Estos proyectos reflejan mi capacidad para trabajar en equipo y mi iniciativa para abordar desafíos de manera autónoma, destacando mi compromiso con la excelencia en cada tarea realizada.'
          />
        </div>
      </div>
      <div className='flex flex-row items-center gap-5 overflow-x-auto w-full'>
        {Briefcase.map((Porfolio) => (
          <div className='flex-row'>
            <PorfolioCard
              imagen={Porfolio.imagen}
              titulo={Porfolio.titulo}
              texto={Porfolio.texto}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
