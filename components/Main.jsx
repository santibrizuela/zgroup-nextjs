import Link from 'next/link'
import React from 'react'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mask'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-100 font-bold'>ASISTENCIA AL INMIGRANTE</p>
                <h1 className='py-4 text-gray-300'><span className='text-[#365084]'>ZETA</span><span className='text-[#a21a21]'>GROUP</span></h1>
                <h2 className='py-2 text-gray-300'>Tu camino comienza aquí.</h2>
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
            </div>
        </div>
    </div>
  )
}

export default Main