import React from 'react'
import { TextPrincipalSecondary } from '@/components/atoms/titles'

const Index = () => {
  return (
    <div className='flex flex-col p-6 gap-3 border-b-2 bg-white'>
        <div className='flex flex-row justify-between'>
            <TextPrincipalSecondary text='Edad'/>
            <TextPrincipalSecondary text='25'/>
        </div>
        <div className='flex flex-row justify-between'>
            <TextPrincipalSecondary text='Correo'/>
            <TextPrincipalSecondary text='jhon.botero1@udea.edu.co'/>
        </div>
        <div className='flex flex-row justify-between'>
            <TextPrincipalSecondary text='Residencia'/>
            <TextPrincipalSecondary text='Marinilla'/>
        </div>
        <div className='flex flex-row justify-between'>
            <TextPrincipalSecondary text='Universidad'/>
            <TextPrincipalSecondary text='UdeA'/>
        </div>
    </div>
  )
}

export default Index
