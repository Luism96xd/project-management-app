import Link from 'next/link'
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import UserData from './user-data';

const Navbar = () => {

  return (
    <nav className={`${styles.navbar} bg-white border-gray-200 dark:bg-gray-900 max-w-screen-xl `}>
      <span className={styles['logo']}>Logo</span>
      <ul className={`${styles['list']} md:block md:w-auto`}>
        <li className={styles['list-item']}><Link href="/">Inicio</Link></li>
        <li className={styles['list-item']}><Link href="/proyectos">Proyectos</Link></li>
        <li className={styles['list-item']}><Link href="/celulas">Células</Link></li>
        <li className={styles['list-item']}><Link href="/editor">Code</Link></li>
      </ul>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
      <UserData/>
    </nav>
  )
}

export default Navbar;