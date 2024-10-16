import React from 'react'
import { TitleSegundario, TextPrincipalTertiary} from '@/components/atoms/titles'
import EducationCard from '@/components/molecules/EducationCard'
import { Certificates } from '@/utils/const'
import index from '../ProfileCard'

const Index = () => {
  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <div className='mb-4 mt-4 text-center'>
        <TitleSegundario title='Educación' />
        <div className='w-full mt-4 mb-4 pl-[20%] pr-[20%]'>
          <TextPrincipalTertiary 
            text='Poseo múltiples certificados en diversas áreas de programación, abarcando tanto el desarrollo frontend como backend. Esta formación me permite contar con un sólido conocimiento en la creación de aplicaciones completas y funcionales.'
          />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        {Certificates.map((Certificate) => (
          <div key={Certificate.id}>
            <EducationCard
              texto1={Certificate.texto1}
              titulo1={Certificate.titulo1}
              titulo2={Certificate.titulo2}
              texto2={Certificate.texto2}
              fecha={Certificate.fecha}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
