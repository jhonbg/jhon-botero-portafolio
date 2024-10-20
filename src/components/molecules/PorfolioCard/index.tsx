import { useState } from 'react'
import { TitleTerciarioPrimary, TitleTerciarioSecondary, TextPrincipalTertiary, TitleSegundario} from '@/components/atoms/titles'
import ModalPorfolio from '@/components/molecules/ModalPorfolio'

const Index = ({imagen, titulo, texto, textoPor,url}:{imagen:string, titulo:string, textoPor:string, texto:string, url:string}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-[310px] content-end bg-white">
      <div>
        <img className='w-[310px] h-[210px] object-cover pt-4' src={imagen} alt="Imagen" />
      </div>
      <div className="px-6 py-4">
        <TitleTerciarioSecondary title={titulo}/>
        <TextPrincipalTertiary text={texto}/>
      </div>
      <div className="px-6 py-4">
        <button onClick={openModal}>
            <TitleTerciarioPrimary title='Mostrar Más &gt;'/>
        </button>
      </div>
      <ModalPorfolio isOpen={isModalOpen} onClose={closeModal}>
        <TitleSegundario title={titulo}/>
        <TextPrincipalTertiary text={textoPor}/>
        <div>
          <a href={url} className="text-blue-500 hover:underline">Accede al Repositorio</a>
        </div>
      </ModalPorfolio>
    </div>
  )
}

export default Index
