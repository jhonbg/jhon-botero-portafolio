import React from 'react'
import { TextPrincipalTertiary } from '@/components/atoms/titles'
import ProgressBar from '@/components/atoms/ProgressBar'

// En el componente se ven los lenguajes de programación dominados por el usuario, cada uno con un % de dominio del lenguaje igual que con los idiomas
const Index = ({texto,porcentaje}:{texto:string,porcentaje:number}) => {
  return (
    <div className='flex flex-col gap-2 w-[250px]'>
        <div className='flex flex-row justify-between'>
            <TextPrincipalTertiary text={texto}/>
            <TextPrincipalTertiary text={`${porcentaje}%`}/>
        </div>
        <ProgressBar progress={porcentaje}/>
    </div>
  )
}

export default Index
