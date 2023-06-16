"use client";
import { supabase } from '@/lib/supabase-client';
import React from 'react'

const ButtonCelulas = async ({areaId}) => {

    const {
        data: { session },
    } = await supabase.auth.getSession();
    
    if (session?.user) {
        console.log(session?.user)
    }

    const joinTeam = async () => {
        console.log(areaId, user.id)
        const { data, error } = await supabase
            .from('areas_trabajo_miembros')
            .insert([
                { 'id': areaId, 'user_id': user.id },
            ]);
        console.log(data, error);
    }

    return (
        <button
            className='bg-green-600 rounded-lg px-4 py-2 w-full'
            onClick={joinTeam}>Unirme a esta célula</button>
    )
}

export default ButtonCelulas;