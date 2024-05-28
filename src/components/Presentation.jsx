import React from 'react'
import { Badge } from './Badge'

export const Presentation = () => {
  return (
    <>
      <div class='w-full mx-auto lg:w-[740px] py-44'>
        <h1 class='text-white text-5xl font-bold flex flex-row gap-x-4 pb-7'>Hi! I'm Ignacio <a 
        href='https://www.linkedin.com/in/juan-ignacio-bisello-aa94281a7/'
        target='_blank'
        rel='noopener'
        class=' flex justify-center items-center' ><Badge /></a></h1>
        <h2 class='text-xl opacity-80'>Web designer and developer specialized in React, based in Buenos Aires, Argentina.</h2>
      </div>
    </>
    
  )
}
