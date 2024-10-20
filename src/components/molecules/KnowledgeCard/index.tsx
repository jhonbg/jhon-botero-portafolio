import React from 'react'
import { TitleTerciarioSecondary,TextPrincipalTertiary} from '@/components/atoms/titles'

// En el componente se define la estructura basica del los conocimientos de la persona
const Index = ({imagen, titulo, texto} : {imagen : string, titulo : string, texto : string }) => {
  return (
    <div className='w-[270px] h-[225px] bg-white flex flex-col justify-center items-center object-contain gap-3 p-2'>
      <div className='w-[68px] h-[68px] object-contain'
        dangerouslySetInnerHTML={{ __html: imagen }}
      />
      <TitleTerciarioSecondary title={titulo}/>
      <TextPrincipalTertiary text={texto}/>
    </div>
  )
}

export default Index
