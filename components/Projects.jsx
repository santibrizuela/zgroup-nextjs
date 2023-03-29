import React from 'react'
import familyOnSofa from '../public/assets/familyOnSofa.jpg'
import nyc from '../public/assets/nyc.jpg'
import citizenship from '../public/assets/citizenship.jpg'
import otherServices from '../public/assets/otherServices.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full text-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='p-2 text-xl tracking-widest uppercase text-[#365084]'>Proyectos</p>
            <h2 className='py-4'>¿Por qué elegirnos?</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem
                    title='Green Card y Residencia'
                    backgroundImg={familyOnSofa}
                    projectUrl='/greencardvisas'
                    detail='Solicitudes Familiares, Visa para Inversionistas.'
                />

                <ProjectItem
                    title='Turismo'
                    backgroundImg={nyc}
                    projectUrl='/turismo'
                    detail='Visas para visitantes, turistas, estudiar y trabajar.'
                />

                <ProjectItem
                    title='Ciudadanía'
                    backgroundImg={citizenship}
                    projectUrl='/citizenship'
                    detail='Ciudadanías, Pasaportes para hijos y nietos de ciudadanos.'
                />

                <ProjectItem
                    title='Otros Servicios'
                    backgroundImg={otherServices}
                    projectUrl='/otherServices'
                    detail='Derechos Humanos, Visas para Inversionistas y Otros.'
                />

            </div>
        </div>
    </div>
  )
}

export default Projects