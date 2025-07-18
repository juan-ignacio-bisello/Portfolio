import { Badge } from './Badge';
import Github from './Icons/Github';
import LinkedIn from './Icons/LinkedIn';
import { Email } from './Icons/Email';

export const Presentation = () => {
  return (
    <>
      <div className='w-full mx-auto lg:w-[740px] pt-24'>
        <img className='rounded-full w-12 h-12' 
          src="https://res.cloudinary.com/dfuwdpual/image/upload/v1752678477/foto_objuub.jpg" 
          alt="biselloJuan photo" />
        <h1 className='text-white text-5xl font-bold flex flex-row gap-x-4 pb-7'>Hi! I'm Ignacio <a 
          href='https://www.linkedin.com/in/juan-ignacio-bisello-aa94281a7/'
          target='_blank'
          rel='noopener'
          className=' flex justify-center items-center' ><Badge /></a></h1>
        <h2 className='text-2xl opacity-80 text-wrap'>Fullstack developer <span className='text-yellow-200/90'>specialized in React and Node</span> , based in Buenos Aires, Argentina.</h2>

        <nav className='flex gap-x-2 mt-5'>
          <Github className='size-11 rounded-full border border-white/10 flex *:justify-center items-center gap-x-2 py-2 px-4v hover:scale-110 transition ' />
          <LinkedIn  className='size-11 rounded-full border border-white/10 flex *:justify-center items-center gap-x-2 py-2 px-4v hover:scale-110 transition ' />
          <Email className='size-11 rounded-full border border-white/10 flex *:justify-center items-center gap-x-2 py-2 px-4v hover:scale-110 transition '  />
        </nav>
        
      </div>
    </>
    
  )
}
