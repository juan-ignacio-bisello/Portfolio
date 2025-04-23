import React from 'react'
import { Header } from './components/Header'
import { Proyect } from './components/Proyects'
import { Presentation } from './components/Presentation'
import { SkillsContent } from './components/SkillsContent'

export const PortfolioApp = () => {
  return (
    <>
        <Header className='flex justify-center' />
        <Presentation  className='text-white text-5xl font-bold flex justify-center flex-row' />
        <Proyect />
        <SkillsContent />
    </>
  )
}
