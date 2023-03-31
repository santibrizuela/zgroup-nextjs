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
                <h2 className='py-4'><span className='text-[#365084]'>ZETA</span><span className='text-[#a21a21]'>GROUP</span></h2>
                <p className='py-2 text-gray-600'>Te guiamos en la protección de tus derechos.</p>
                <p className='py-2 text-gray-600'>
                 En Zeta Group tenemos el honor de ofrecer un equipo de abogados para servicios de asesoría
                 legal en materia migratoria. En un mundo cada vez más globalizado, son cada vez más las
                  personas que buscan una oportunidad en Estados Unidos. Ya sea para trabajar, estudiar 
                  o simplemente vivir, el Zeta Group ofrece una amplia gama de servicios para ayudar a 
                  las personas a alcanzar sus objetivos.
                </p>

                <p className='py-2 text-gray-600'>
                Desde el trámite de visas y green cards, hasta la obtención de la ciudadanía estadounidense, 
                nuestro equipo de expertos está altamente capacitado para brindar asesoría legal de alta 
                calidad en todas las áreas de la ley migratoria. Además, Zeta Group también cuenta con un 
                equipo de asesores financieros para brindar asesoramiento en temas económicos relacionados 
                con la inmigración.
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