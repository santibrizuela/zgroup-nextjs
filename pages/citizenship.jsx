import Image from 'next/image'
import React from 'react'
import citizenshipImg from '../public/assets/citizenship.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const citizenship = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={citizenshipImg} alt='Green Card & Visa'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Ciudadania</h2>
                <h3>Residencias y Visados</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto</p>
                <h2>Residencia</h2>
                <p>En cuanto a la ciudadanía estadounidense, existen varias formas de obtenerla, 
                    como por ejemplo, nacer en los Estados Unidos, ser hijo de un ciudadano 
                    estadounidense, o mediante un proceso llamado naturalización, que implica 
                    cumplir con ciertos requisitos, como haber sido residente permanente por un 
                    período mínimo de tiempo y pasar una prueba de ciudadanía. La ciudadanía 
                    estadounidense otorga una serie de derechos y privilegios, como el derecho a 
                    votar y el derecho a trabajar en ciertos trabajos del gobierno.
                </p>
                <button className='btn px-8 py-2 mt-4 mr-8 text-white'>Guia</button>
                
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
                
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center folt-bold pb-2'>Documentos</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Titulo 1
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Titulo 2
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Titulo 3
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Titulo 4
                        </p>
                    </div>
                </div>

            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer font-bold'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default citizenship