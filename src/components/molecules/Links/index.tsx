import React from 'react'
import { TitleTerciarioSecondary } from '@/components/atoms/titles'
import { IconButton } from '@/components/atoms/Button'
import { IconButtons } from '@/utils/const'

const Index = () => {
  return (
    <div className='flex flex-col w-[60px] gap-2 bg-white items-center pt-12'>
        <TitleTerciarioSecondary title='Links'/>
        <div className='flex flex-col gap-2'>
            {IconButtons.map((icon) =>
              <div key={icon.id}>
                <IconButton 
                icon={icon.icono} 
                link={icon.enlace}
                />
              </div>
            )}
        </div>
    </div>
  )
}

export default Index
