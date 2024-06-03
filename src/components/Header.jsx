import React from 'react'

export const Header = () => {
  return (
    <header className="flex justify-center items-center py-5 w-[1120px]">
        <span></span>
        <nav className='flex flex-row gap-x-10 opacity-80 '>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </nav>

    </header>
  )
}
