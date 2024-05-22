import React from 'react'

export const Header = () => {
  return (
    <header class="flex justify-between items-center py-3 w-[1120px]">
        <img class='rounded-full w-12 h-12' src="./././public/foto.png" alt="biselloJuan photo" />

        <nav class='flex flex-row gap-x-10 opacity-80 '>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </nav>

    </header>
  )
}
