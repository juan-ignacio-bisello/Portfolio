

export const SerendipiaProyect = () => {
  return (
    <div className='flex bg-zinc-900 rounded-2xl p-8 shadow-lg max-w-6xl gap-8 w-full mx-auto lg:w-[740px]'>
        <div className='flex flex-col md:flex-row items-start '>

            {/* Texto */}
            <div className='flex-1'>
            <h2 className='text-2xl font-bold text-yellow-300 mb-4'>Serendipia E-commerce</h2>
            <p className='text-base leading-relaxed text-gray-300 mb-4'>
                Plataforma e-commerce para productos de diseño. Incluye autenticación con roles, panel administrativo (CRUD), carrito de compras y categorías. Desarrollado con 
                <span className='text-yellow-200'> React, Redux Toolkit, TailwindCSS, Node.js, Express y MongoDB</span>. Gestión de imágenes con <span className='text-yellow-200'>Cloudinary </span>
                 y rutas privadas para administración. Despliegue en Render.
            </p>

            {/* Imagen mockup web */}
            <div className=' grid-flow-row'>
                <a 
                    href='https://serendipia.onrender.com/' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='group relative overflow-hidden'
                >
                    <img
                        className='object-cover rounded-lg mb-3'
                        src='https://res.cloudinary.com/dfuwdpual/image/upload/v1752678467/Serendipia_twt6kq.jpg'
                        alt='Landing page Serendipia'
                    />
                </a>

                <a 
                    href='https://serendipia.onrender.com/' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='group relative overflow-hidden rounded-lg'
                >
                    <img
                        className='object-cover rounded-lg'
                        src='https://res.cloudinary.com/dfuwdpual/image/upload/v1752680003/Serendipia_adminPanel_lxfga3.jpg'
                        alt='Admin Panel Serendipia'
                    />
                </a>
            </div>

                <a
                    href='https://serendipia.onrender.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block mt-4 text-yellow-300 hover:underline'
                >
                    👉 Ver proyecto en vivo
                </a>
            </div>

            {/* Imagen mockup mobile */}
            <div className='flex-shrink-0 pt-14'>
                <img
                    className='rounded-lg object-contain h-[500px] w-[280px] shadow-lg'
                    src='https://res.cloudinary.com/dfuwdpual/image/upload/v1752678467/Serendipia_2_emovtx.jpg'
                    alt='Mobile responsive Serendipia'
                />
            </div>

            
        </div> 
    </div>
    
  );
};
