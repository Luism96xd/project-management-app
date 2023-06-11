"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreateWorkTeam = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/celulas/', {name, description});
        console.log(response);
        router.push("/celulas")
        router.refresh();
    }

    return (
        <div className='grid grid-cols-2 h-screen p-4 gap-6'>
            <div className='bg-white rounded-lg p-4'>
                <h1 className='font-bold w-full text-lg text-center'>Crear Célula</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <span className='font-semibold pb-2'>Nombre:</span>
                        <input 
                            type="text" 
                            className="input" 
                            id="name" 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="description">
                        <span className='font-semibold pb-2'>Descripción:</span>
                        <textarea
                            className="input" 
                            id="description" 
                            cols="30" 
                            rows="8"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                    <div className='w-full mt-4'>
                        <button className='border-none outline-none w-full px-10 py-2 bg-blue-500 text-white rounded-lg'>
                            Agregar
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

export default CreateWorkTeam;
