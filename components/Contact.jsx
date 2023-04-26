import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsPersonVcard } from 'react-icons/bs'
import contactImg from '../public/assets/contactImg.jpg'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='py-8 text-xl tracking-widest uppercase text-[#a21a21] text-center'>Contacto</p>
            <h2 className='py-4 text-center'>Estemos en Contacto</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/*left*/}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 scale-90 hover:scale-100 ease-in duration-300'>
                    <div className='p-4'>
                        <form action="https://formsubmit.co/zetagroupimmigration@gmail.com" method="POST" id='contactForm'>
                            <div className='grid gap-4 w-full py-2'>

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

                                <input type="hidden" name="_subject" value="CONTACT FORM"></input>

                            </div>


                            <button type="submit" className='w-full p-4 text-gray-100 mt-4 btn'>Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
                

                {/*right*/}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 scale-90 hover:scale-100 ease-in duration-300'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl scale-90 hover:scale-100 ease-in duration-300' src={contactImg} alt="Contact" />
                        </div>
                        <div className='text-center'>
                            <h2 className='py-2'><span className='text-[#365084]'>ZETA</span><span className='text-[#a21a21]'>GROUP</span></h2>
                            <p className='pb-1'>Asistencia al Inmigrante</p>
                            
                            <p>7875 NW 12th ST, Suite 113, Miami, FL 33126.</p>
                            <p>info@zeta-immigration.com</p>
                            <p>Tel: 786-863-2741</p>
                        </div>
                        <div className='text-center'>
                            <p className='uppercase pt-8'> Conecta con Nosotros</p>
                            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                                <Link target='_blank' href='https://www.whatsapp.com/'>
                                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineWhatsApp/>
                                    </div>
                                </Link>
                                <Link target='_blank' href='https://www.linkedin.com/'>
                                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineLinkedin/>
                                    </div>
                                </Link>
                                <Link href='/#contact'>
                                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail/>
                                    </div>
                                </Link>
                                <Link href='/#projects'>
                                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <BsPersonVcard/>
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
                
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='btn bg-transparent rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <HiOutlineChevronDoubleUp size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact