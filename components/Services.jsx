import React from 'react'
import {GoLaw} from 'react-icons/go'
import {BiDollar, BiHomeAlt} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import {FaCar, FaAddressCard, FaSuitcaseRolling} from 'react-icons/fa'
import {AiFillIdcard, AiFillHome} from 'react-icons/ai'
import Link from 'next/link'

const Services = () => {
  return (
    <div id='services' className='w-full lg:h-screen py-20 lg:p-2 text-center'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#a21a21]'>Servicios</p>
            <h2 className='py-4'>¿Qué tenemos para tí?</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                

                <Link href='/otherServices'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><GoLaw className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Asesores Legales</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/otherServices'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><BiDollar className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Asesores Financieros</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/greencardvisas'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><MdWork className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Oportunidad de Empleo</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/otherServices'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><FaCar className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Vehículos</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/otherServices'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><AiFillHome className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Bienes Raíces</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/greencardvisas'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><AiFillIdcard className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Green Card</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/greencardvisas'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><FaAddressCard className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Residencias</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/turismo'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><FaSuitcaseRolling className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Turismo</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>
                

                              

                
                
            </div>
        </div>
        
    </div>
  )
}

export default Services