import Image from 'next/image'
import React from 'react'
import citizenshipImg from '../public/assets/accounting.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const citizenship = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={citizenshipImg} alt='Green Card & Visa'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Contabilidad</h2>
                <h3>Gestión</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto</p>
                <h2>Servicios Contables</h2>
                <p>Si necesita ayuda con su contabilidad y finanzas en Estados Unidos, estamos aquí para ayudarle. 
                    Ofrecemos una amplia gama de servicios de 
                    contabilidad para ayudar a nuestros clientes a administrar sus finanzas de manera 
                    efectiva y cumplir con sus obligaciones fiscales. Ya sea que necesite ayuda con la 
                    preparación de impuestos, la contabilidad mensual o la planificación financiera, 
                    nuestros profesionales altamente capacitados pueden ayudarlo a mantener sus finanzas 
                    en orden y a tomar decisiones informadas sobre su negocio. Póngase en contacto con 
                    nosotros hoy mismo para programar una consulta y descubrir cómo podemos ayudarlo a 
                    lograr sus objetivos financieros.
                </p>                
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
                
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 scale-90 hover:scale-100 ease-in duration-300'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Servicios</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> CONTABILIDAD
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> PAYROLL
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> APERTURA DE EMPRESAS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> TAXES (Personales y Corporativos)
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> ITIN NUMBER
                        </p>
                    </div>
                </div>

            </div>

            
            
            
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer font-bold p-2'>Back</p>
        </Link>
    </div>
  )
}

export default citizenship