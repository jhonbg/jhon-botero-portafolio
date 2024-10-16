import React from 'react'
import { TitleTerciarioSecondary, TextPrincipalTertiary } from '@/components/atoms/titles'

const index = () => {
  return (
    <div className="flex flex-col items-center bg-white p-16 justify-center text-center gap-2 border-b-2">
        <div className="bg-gray-100 rounded-full overflow-hidden w-40 h-40 relative">
            <img src="/logos/Foto.png" 
            alt="Foto de perfil" 
            className="w-full h-full object-cover scale-150"
            />
        </div>
        <div className='gap-2'>
            <TitleTerciarioSecondary title='Jhon Botero'/>
            <TextPrincipalTertiary text='Full-Stack Developer'/>
        </div>
    </div>
  )
}

export default index
