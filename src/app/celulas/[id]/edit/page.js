"use client";
import { supabase } from '@/lib/supabase-client';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditPage = async ({params})  => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [celula, setCelula] = useState(null);
    const [isLoading, setLoading] = useState(false)

    const {id} = params;

    useEffect(() => {
        console.log("useEffect called");
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`/api/celulas/${id}`);
                console.log(response.data);
                setCelula(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [id])
    
    const {
        data: { session },
    } = await supabase.auth.getSession();


    /*if (!session) {
        redirect('/login')
    }*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/celulas/', {name, description});
        console.log(response);
        router.push("/celulas")
        router.refresh();
    }

    if (isLoading) return <p>Loading...</p>


    return (
        <div className='grid grid-cols-2 h-screen p-4 gap-6'>
            <div className='bg-white rounded-lg p-4'>
                <h1 className='font-bold w-full text-lg text-center'>Editar Área de Trabajo</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <span className='font-semibold pb-2'>Nombre:</span>
                        <input
                            type="text"
                            className="input"
                            id="name"
                            defaultValue={celula?.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="description">
                        <span className='font-semibold pb-2'>Descripción:</span>
                        <textarea name="description"
                            className="input"
                            defaultValue={celula?.description}
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
                <h1 className='font-bold text-2xl'>{celula?.name}</h1>
                <p className='text-justify'>{celula?.description}</p>
            </div>
        </div>
    )
}

export default EditPage;
