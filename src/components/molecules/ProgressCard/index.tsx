import React from 'react'
import ProgressComponets from '@/components/molecules/ProgressComponets'
import { Languages, ProgrammingLanguages } from '@/utils/const'
import { TitleTerciarioSecondary } from '@/components/atoms/titles'

const Index = ({ utilitConst}:{utilitConst: 'Idiomas' | 'Lenguajes de Programación'}) => {

  const items = utilitConst === 'Idiomas' ? Languages : ProgrammingLanguages;
  return (
    <div className='flex flex-col border-b-2 gap-3 p-5 bg-white'>
      <div className='flex'>
        <TitleTerciarioSecondary title={utilitConst}/>
      </div>
      <div className='flex flex-col gap-2'>
        {items.map((item) =>(
          <div key={item.id}>
            <ProgressComponets 
            texto1={item.texto1} 
            texto2={item.texto2} 
            porcentaje={item.porcentaje}/>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Index
