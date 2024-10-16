import React from 'react'

const Index = ({progress}:{progress:number}) => {
  return (
    <div className='p-0.5 bg-primary rounded-full'>
      <div className='bg-white p-0.5 rounded-full'>
        <div className='bg-white h-2 w-full rounded-full overflow-hidden'>
          <div 
            className='bg-primary h-full rounded-full transition-all duration-300 ease-in-out'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Index
