import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div id='footer' className='w-full text-center bg-black/80 text-gray-300 lg:mt-96'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <Link href='/'>
                <h2 className=' text-md py-4'>ZETA GROUP</h2>
            </Link>
            
            
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-300'>
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineWhatsApp/>
                    </div>
                </Link>
                <Link href='/#contact'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                </Link>
                <Link href='/#projects'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                </Link>
                <Link target='_blank' href='https://www.instagram.com/'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineInstagram/>
                    </div>
                </Link>    
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>

                
              <div class="">
                <h5 class="uppercase my-1">Navigation</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/#home" class="text-white">Home</a>
                  </li>
                  <li>
                    <a href="/#about" class="text-white">About us</a>
                  </li>
                  <li>
                    <a href="/#services" class="text-white">Servicios</a>
                  </li>
                  <li>
                    <a href="/#projects" class="text-white">Proyectos</a>
                  </li>
                  <li>
                    <a href="/#contact" class="text-white">Contacto</a>
                  </li>
                </ul>
              </div>
              
              <div class="">
                <h5 class="uppercase my-1">Redes</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="https://www.instagram.com/"  target="_blank" class="text-white">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/"  target="_blank" class="text-white">Facebook</a>
                  </li>
                  <li>
                    <a href="https://wa.link/"  target="_blank" class="text-white">Whatsapp</a>
                  </li>
                  <li>
                    
                    <a href="https://www.linkedin.com/" class="text-white" target="_blank">Linkedin</a>
                  </li>
                </ul>
              </div>
              
              <div class="col-span-2 md:col-span-1">
                <h5 class="uppercase my-1">Location</h5>
                <p>Cnel. Thorne 831, Ciudad Madero, Buenos Aires, Argentina.</p>
                <p>Lunes a viernes: 8hs a 12:30 / 16:30 a 20hs</p>
              </div>
             
                

            </div>


            <p className='p-2 tracking-widest uppercase'>Brisider</p>
            <div className='grid md:grid-cols-2 gap-8'>

                

            </div>
        </div>
    </div>
  )
}

export default Footer