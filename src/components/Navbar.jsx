"use client";
import Link from 'next/link'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Navbar.module.css';
import { supabase } from '@/lib/supabase-client';

export const Navbar = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <nav className={styles.navbar}>
      <span className={styles['logo']}>Logo</span>
      <ul className={styles['list']}>
        <li className={styles['list-item']}><Link href="/">Inicio</Link></li>
        <li className={styles['list-item']}><Link href="/proyectos">Proyectos</Link></li>
        <li className={styles['list-item']}><Link href="/celulas">Células</Link></li>
        <li className={styles['list-item']}><Link href="/editor">Code</Link></li>
      </ul>
      <div className='w-3/12 px-4'>
        <button 
          className='w-full bg-transparent hover:bg-black transition-all text-blackfont-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'
          onClick={handleSignOut}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  )
}
