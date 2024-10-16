import React from 'react'
import { TextPrincipalTertiary } from '@/components/atoms/titles'

const Index = ({texto}:{texto:string}) => {
  return (
    <div className='flex flex-row gap-2 items-center justify-start'>
      <img src='/logos/Icons.svg'/>
      <TextPrincipalTertiary text={texto}/>
    </div>
  )
}

export default Index
