import React from 'react'
import { TitleTerciarioPrimary, TitleTerciarioSecondary, TextPrincipalTertiary} from '@/components/atoms/titles'
import { Sign } from 'crypto'

const Index = ({imagen, titulo, texto}:{imagen:string, titulo:string, texto:string}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-[310px]  content-end bg-white">
      <div>
        <img className='w-[310px] h-auto pt-4' src={imagen} alt="Imagen" />
      </div>
      <div className="px-6 py-4">
        <TitleTerciarioSecondary title={titulo}/>
        <TextPrincipalTertiary text={texto}/>
      </div>
      <div className="px-6 py-4">
        <button>
            <TitleTerciarioPrimary title='Mostrar Más &gt;'/>
        </button>
      </div>
    </div>
  )
}

export default Index
