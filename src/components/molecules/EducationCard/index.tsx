import React from 'react'
import { TitleTerciarioSecondary, TextPrincipalSecondary, TextPrincipalTertiary,  Date} from '@/components/atoms/titles'

// Este componente contiene la estructura basica de como se ve una tarjeta de estudios o cursos hechos por la persona.
const Index = ({titulo1, titulo2, texto1, texto2, fecha}:{titulo1:string, titulo2:string, texto1:string, texto2:string, fecha:string}) => {
  return (
    <div className="w-[904px] h-[150px] bg-white flex justify-around box-content">
        <div className='flex flex-col gap-4'>
            <TitleTerciarioSecondary title={titulo1}/>
            <div className='flex flex-row justify-between'>
                <TextPrincipalSecondary text={texto1}/>
                <Date date={fecha}/>
            </div>
        </div>
        <div>
            <TitleTerciarioSecondary title={titulo2}/>
            <div className='w-[536px] h-[100px] box-border mt-4'>
            <TextPrincipalTertiary text={texto2}/>
            </div>
        </div>
    </div>
  )
}

export default Index
