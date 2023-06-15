"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase-client';

const UserData = async () => {

    const router = useRouter();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if(error){
      console.log(error);
    }
    router.push("/login")
  }

  return (
    <div className='w-3/12 px-4 flex items-center'>
    <div>{user?.email}</div>
    <button 
      className='w-full bg-transparent hover:bg-black transition-all text-blackfont-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'
      onClick={handleSignOut}
    >
      Cerrar Sesión
    </button>
  </div>
  )
}

export default UserData;