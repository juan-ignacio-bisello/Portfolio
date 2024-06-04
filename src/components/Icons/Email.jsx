import React from 'react'
import { IconMailForward } from '@tabler/icons-react';
export const Email = () => {
  return (
    <a href="mailto:juanignaciobisello@hotmail.com">
        <IconMailForward  className='size-11 rounded-full border border-white/10 flex *:justify-center items-center gap-x-2 py-2 px-4v hover:scale-110 transition ' stroke={2} />
    </a>
    
    )
}
