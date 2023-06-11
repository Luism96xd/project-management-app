import { supabase } from '@/lib/supabase-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const getData = async () => {
    try {
      const { data, error } = await supabase
        .from('proyectos')
        .select('*');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
const Projects = async () => {

    const {
        data: { session },
    } = await supabase.auth.getSession();

    /*if (!session) {
        redirect('/login')
    }
    */

    const projects = await getData();

    return (
        <div>
            <div className='flex flex-row py-4 px-8 h-16 justify-between items-center'>
                <h1 className='text-xl font-bold py-2'>Proyectos Activos</h1>
                <Link href={'/proyectos/new'}>
                    <button className='bg-green-500 px-4 py-2 text-white rounded-lg h-full'>
                        Crear nuevo
                    </button>
                </Link>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 h-screen p-4 gap-6'>
                {projects.map((project) => {
                    return (
                        <Link href={`/proyectos/${project.id}`}>
                            <div className='bg-white rounded-lg shadow-md p-4'>
                                <h2 className='w-full text-center font-bold'>{project.name}</h2>
                                <ul className='flex flex-wrap w-full gap-4 p-2'>
                                    {project.technologies?.map((tecnologia) => {
                                        return <li className='chip'>
                                            {tecnologia}
                                        </li>
                                    })
                                    }
                                </ul>
                            </div>
                        </Link>
                    );
                })
                }
            </div>
        </div>
    )
}

export default Projects;
