import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import aboutImg from '../public/assets/aboutImg.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen py-20 md:p-2 flex items-center text-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#365084]'>Acerca de</p>
                <h2 className='py-4'>Nuestra Compañía</h2>
                <p className='py-2 text-gray-600'>Te guiamos en la protección de tus derechos.</p>
                <p className='py-2 text-gray-600'>
                    Lorem Ipsum es simplemente el texto de relleno de 
                    las imprentas y archivos de texto. Lorem Ipsum 
                    ha sido el texto de relleno estándar de las 
                    industrias desde el año 1500, cuando un impresor 
                    desconocido usó una galería de textos y los 
                    mezcló de tal manera que logró hacer
                </p>

                <p className='py-2 text-gray-600'>
                    Lorem Ipsum es simplemente el texto de relleno de 
                    las imprentas y archivos de texto. Lorem Ipsum 
                    ha sido el texto de relleno estándar de las 
                    industrias desde el año 1500, cuando un impresor 
                    desconocido usó una galería de textos y los 
                    mezcló de tal manera que logró hacer
                </p>

                <Link href='/#contact'>
                    <p 
                        className='p-2 rounded-lg btn text-gray-200 font-bold text-lg cursor-pointer w-fit m-auto shadow-xl hover:scale-105 ease-in duration-300'
                    >
                        Contactanos
                    </p>
                </Link>
                
                
                
            </div>
            <div className='w-full h-auto scale-90 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-100 ease-in duration-300'>
                <Image className='rounded-xl' src={aboutImg} alt="ZetaGroup"></Image>
            </div>
        </div>
    </div>
  )
}

export default About