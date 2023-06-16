import React from 'react';
import { supabase } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

const UserData = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();


  const handleSignOut = async () => {
    'use server'
    console.log('clicked')
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    redirect('/login');
  }

  return (
    <div className='w-3/12 px-4 flex items-center'>
      <div>{session?.user.email}</div>
      <form>
        <button
          className='w-full bg-transparent hover:bg-black transition-all text-blackfont-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'
          formAction={handleSignOut}
        >
          Cerrar Sesión
        </button>
      </form>
    </div>
  )
}

export default UserData;