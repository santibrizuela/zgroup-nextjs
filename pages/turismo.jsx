import Image from 'next/image'
import React from 'react'
import turismoImg from '../public/assets/nyc.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const turismo = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={turismoImg} alt='Green Card & Visa'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Turismo</h2>
                <h3>Residencias y Visados</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto</p>
                <h2>Residencia</h2>
                <p>Los ciudadanos de muchos países pueden ingresar a los Estados Unidos 
                    por un período de tiempo limitado sin necesidad de una visa, como 
                    parte del programa de exención de visa. Sin embargo, aquellos 
                    ciudadanos que no son elegibles para el programa de exención de visa 
                    deberán obtener una visa de turista. Es importante tener en cuenta 
                    que la obtención de una visa de turista no garantiza la entrada a los 
                    Estados Unidos, y los oficiales de inmigración tienen la discreción 
                    de negar la entrada a cualquier persona que consideren que representa 
                    un riesgo para la seguridad nacional.
                </p>
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 scale-90 hover:scale-100 ease-in duration-300'>
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

            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 scale-90 hover:scale-100 ease-in duration-300'>
                <div className='p-4'>
                    <form action="https://formsubmit.co/zetagroupimmigration@gmail.com" method="POST">
                        <div className='grid gap-4 w-full py-2'>
                            <h3>Contacto Turismo</h3>

                            <div className='flex flex-col'>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" required placeholder='Nombre Completo'/>
                            </div>

                            <div className='flex flex-col'>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="number" placeholder='1234567890'/>
                            </div>

                            <div className='flex flex-col'>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email" required placeholder='mail@mail.com'/>
                            </div>
                            <div className='flex flex-col'>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="issue" required placeholder='Asunto'/>
                            </div>
                            <div className='flex flex-col'>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name="message" required placeholder='Escribir aquí...'/>
                            </div>

                            <input type="hidden" name="_subject" value="TURISMO FORM"></input>

                        </div>


                        <button type="submit" className='w-full p-4 text-gray-100 mt-4 btn'>Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
        
        <Link href='/#projects'>
            <p className='underline cursor-pointer font-bold p-2'>Back</p>
        </Link>
    </div>
  )
}

export default turismo