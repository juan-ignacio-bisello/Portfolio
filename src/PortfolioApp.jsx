import React from 'react'
import { Header } from './components/Header'
import { Proyect } from './components/Proyect'
import { Presentation } from './components/Presentation'

export const PortfolioApp = () => {
  return (
    <>
        <Header className='flex justify-center' />
        <Presentation  className='text-white text-5xl font-bold flex justify-center flex-row' />
        <Proyect />
    </>
  )
}
