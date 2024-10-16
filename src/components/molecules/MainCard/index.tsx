import React from 'react'
import {TitlePrincipalPrimary, TitlePrincipalSecondary, TextPrincipalTertiary} from '@/components/atoms/titles'
import { Button } from '@/components/atoms/Button'

const Index = () => {
  return (
    <div className="flex items-start justify-start bg-gray-100 ml-8 mr-8">
      <div className="bg-white p-8 rounded-lg shadow-lg flex-row items-center flex">
        <div className="flex-col w-2/3">
            <TitlePrincipalSecondary title='Yo soy Jhon Botero'/>
            <div className='flex flex-row gap-1 text-center justify-center items-center'>
                <TitlePrincipalPrimary title='Full-Stack'/>
                <TitlePrincipalSecondary title='Developer'/>
            </div>
            <div className='py-3'>
                <TextPrincipalTertiary text='Estudiante de octavo semestre de Ingeniería en Sistemas, apasionado por la tecnología y el desarrollo de soluciones innovadoras. Destaca por sus habilidades en trabajo en equipo, logrando una comunicación eficaz y colaborativa para alcanzar objetivos comunes. Comprometido con el aprendizaje constante, siempre busca nuevas oportunidades para mejorar sus conocimientos y adaptarse a los cambios del sector tecnológico.'/>  
            </div>
            <Button/>
        </div>
        <div className="flex w-1/3 rounded-full overflow-hidden relative">
          <img
            src="/logos/Foto.png"
            alt="Front-end Developer"
            className="w-auto h-auto rounded-lg scale-150"
          />
        </div>
      </div>
    </div>
  )
}

export default Index
