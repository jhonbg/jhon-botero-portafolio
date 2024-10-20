import React, { useState } from 'react'
import {TitlePrincipalPrimary, TitlePrincipalSecondary, TextPrincipalTertiary} from '@/components/atoms/titles'
import { Button } from '@/components/atoms/Button'
import Modal from '@/components/molecules/Modal'

// En este componete se hace una breve introduccion del usuario en la cual se componen de su nombre, profesión y un breve parrafo de su perfil.
const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
                <TextPrincipalTertiary text='Estudiante de octavo semestre de Ingeniería en Sistemas, interesado en crear soluciones tecnológicas innovadoras que generen impacto. Destaco por mi liderazgo en equipos de trabajo, facilitando una colaboración eficiente y orientada a resultados. Mi curiosidad constante me impulsa a aprender nuevas tecnologías y adaptarme rápidamente a los cambios del sector, siempre buscando desafíos que me permitan crecer y aportar valor.'/>  
            </div>
            <Button onClick={openModal}/>
        </div>
        <div className="flex w-1/3 rounded-full overflow-hidden relative">
          <img
            src="/logos/Foto.png"
            alt="Front-end Developer"
            className="w-auto h-auto rounded-lg scale-150"
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">¡Gracias por tu interés!</h2>
        <p className="text-gray-700 mb-4">
        Soy Jhon Alexander Botero, un próximo ingeniero en sistemas que transforma ideas en soluciones. Con cada línea de código, cada proyecto en equipo y cada aprendizaje adquirido, busco crear resultados que impulsen la innovación y resuelvan los desafíos del presente. Si tu equipo necesita a alguien que aporte visión y colaboración, hablemos de cómo puedo ser parte del cambio.
        </p>
      </Modal>
    </div>
  )
}

export default Index
