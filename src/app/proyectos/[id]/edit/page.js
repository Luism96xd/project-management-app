"use client";
import { supabase } from '@/lib/supabase-client';
import axios from 'axios';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default async function ProjectPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [project, setProject] = useState("");
    const router = useRouter();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    /*if (!session) {
        redirect('/login')
    }*/

    useEffect(() => {
        const getData = async () => {
            const {id} = router.query;
            const response = await axios.get(`/api/proyectos/${id}`)
            setProject(response.data);
        }
        getData();
    }, []);


    if (!project) {
        notFound()
    }

    const handleSubmit = async () => {
        const response = await axios.put(`/api/proyectos/${id}`, {
            name: name,
            description: description
        });
        console.log(response.data)
    }

    return (
        <div className='grid grid-cols-2 h-screen p-4 gap-6'>
            <div className='bg-white rounded-lg p-4'>
                <h1 className='font-bold w-full text-lg text-center'>Editar Proyecto</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <span className='font-semibold pb-2'>Nombre:</span>
                        <input
                            type="text"
                            className="input"
                            id="name"
                            defaultValue={project.name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="description">
                        <span className='font-semibold pb-2'>Descripción:</span>
                        <textarea
                            className="input"
                            value={description}
                            defaultValue={project.description}
                            id="description"
                            cols="30"
                            rows="8"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                    <div className='w-full mt-4'>
                        <button className='border-none outline-none w-full px-10 py-2 bg-green-500 text-white rounded-lg'>
                            Editar
                        </button>
                    </div>
                </form>
            </div>
            <div className='bg-white rounded-lg p-10 flex flex-col gap-4'>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p className='text-justify'>{description}</p>
            </div>
        </div>
    )
}
