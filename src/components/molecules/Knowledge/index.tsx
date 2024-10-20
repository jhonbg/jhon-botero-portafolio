import React from 'react'
import { TitleSegundario, TextPrincipalTertiary} from '@/components/atoms/titles'
import KnowledgeCard from '@/components/molecules/KnowledgeCard'
import { Knowledges } from '@/utils/const'

// El componente hace un pequeña introduccion al conocimiento de la persona y hace la carga de los conocimientos con la estructura del componente KnowledgeCard.
const Index = () => {
  return (
    <div className='flex flex-col text-center items-center bg-gray-100 w-full '>
      <div className='mb-4 mt-4'>
        <TitleSegundario title='Mi Conocimiento' />
        <div className='w-full mt-4 mb-4 pl-[20%] pr-[20%]'>
          <TextPrincipalTertiary 
            text='Experiencia en el desarrollo de aplicaciones web, centrada en la creación de soluciones robustas y escalables mediante la implementación y consumo de APIs RESTful. Poseo conocimientos en arquitectura de software, integración de servicios y buenas prácticas para asegurar un rendimiento óptimo y mantenibilidad en los proyectos.'
          />
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2 w-full'>
        {Knowledges.map((Knowledge) => (
          <div key={Knowledge.id}>
            <KnowledgeCard
              imagen={Knowledge.imagen}
              titulo={Knowledge.titulo}
              texto={Knowledge.texto}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
