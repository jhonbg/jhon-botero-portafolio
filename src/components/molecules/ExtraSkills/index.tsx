import React from 'react'
import { TitleTerciarioSecondary } from '@/components/atoms/titles'
import ExtraSkill from '@/components/molecules/ExtraSkill'
import { Skills } from '@/utils/const'

const Index = () => {
  return (
    <div className='flex flex-col border-b-2 gap-3 p-11 bg-white'>
        <div className='flex'>
            <TitleTerciarioSecondary title='Habilidades Adicionales'/>
        </div>
        <div className='flex flex-col gap-2'>
            {Skills.map((skill)=>(
              <div key={skill.id}>
                <ExtraSkill texto={skill.texto}/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Index
