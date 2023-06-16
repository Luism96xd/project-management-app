"use client";
import { supabase } from '@/lib/supabase-client';
import React from 'react'

const ButtonProyectos = async ({ projectId }) => {


    const {
        data: { session },
    } = await supabase.auth.getSession();
    
    if (session?.user) {
        console.log(session?.user)
    }


    const joinTeam = async () => {
        const { data, error } = await supabase
            .from('proyectos_colaboradores')
            .insert([
                { 'id': projectId, 'user_id': user.id},
            ])
        console.log(data, error);
    }

    return (
        <button
            className='bg-green-600 rounded-lg px-4 py-2 w-full'
            onClick={joinTeam}>Unirme a esta célula</button>
    )
}

export default ButtonProyectos;