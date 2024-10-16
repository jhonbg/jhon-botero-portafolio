import React from 'react'
import { TextPrincipalTertiary } from '@/components/atoms/titles'
import ProgressBar from '@/components/atoms/ProgressBar'

const Index = ({texto1,texto2,porcentaje}:{texto1:string,texto2:string,porcentaje:number}) => {
  return (
    <div className='flex flex-col gap-2 w-[250px]'>
        <div className='flex flex-row justify-between'>
            <TextPrincipalTertiary text={texto1}/>
            <TextPrincipalTertiary text={texto2}/>
        </div>
        <ProgressBar progress={porcentaje}/>
    </div>
  )
}

export default Index
