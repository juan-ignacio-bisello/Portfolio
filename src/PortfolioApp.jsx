import React from 'react'
import { Header } from './components/Header'
import { Proyect } from './components/Proyects'
import { Presentation } from './components/Presentation'
import { SkillsContent } from './components/SkillsContent'

export const PortfolioApp = () => {
  return (
    <>
        {/* <Header /> */}
        <Presentation />
        <Proyect />
        <SkillsContent />
    </>
  )
}
