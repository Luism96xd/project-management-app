import Link from 'next/link'
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import UserData from './user-data';

export const Navbar = async () => {

  return (
    <nav className={styles.navbar}>
      <span className={styles['logo']}>Logo</span>
      <ul className={styles['list']}>
        <li className={styles['list-item']}><Link href="/">Inicio</Link></li>
        <li className={styles['list-item']}><Link href="/proyectos">Proyectos</Link></li>
        <li className={styles['list-item']}><Link href="/celulas">Células</Link></li>
        <li className={styles['list-item']}><Link href="/editor">Code</Link></li>
      </ul>
      <UserData/>
    </nav>
  )
}
