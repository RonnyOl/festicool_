"use client"
import Link from "next/link";
import { useState } from "react";
import Header from "./Header";

export default function Navbar() {
  const [showNav, setshowNav] = useState(false)
  
  const handleMenu = () => {
    
    setshowNav(!showNav)
 
  }
  
  const actualizarestado = (nuevoEstado) => {
    setshowNav(nuevoEstado)
  }

  return (
    <>
    <header id="navTop" className="headerr bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <Link href="/"> <img width="70px" src="https://i.imgur.com/hrO11Nw.png"/></Link>

        <div className="flex ml-16 flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="txtNav p-0 text-neutral-100 transition duration-200 hover:text-neutral-600 hover:ease-in-out focus:text-neutral-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-600 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="/"
                  data-te-nav-link-ref
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  className="txtNav p-0 text-neutral-100 transition duration-200 hover:text-neutral-600 hover:ease-in-out focus:text-neutral-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-600 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="/catalogo/"
                  data-te-nav-link-ref
                >
                  Catalogo
                </Link>
              </li>

              <li>
                <Link
                  className="txtNav p-0 text-neutral-100 transition duration-200 hover:text-neutral-600 hover:ease-in-out focus:text-neutral-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-600 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="/busqueda/"
                  data-te-nav-link-ref
                >
                  Busquedas
                </Link>
              </li>
              <li>
                <Link
                  className="txtNav p-0 text-neutral-100 transition duration-200 hover:text-neutral-600 hover:ease-in-out focus:text-neutral-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-600 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="/nosotros/"
                  data-te-nav-link-ref
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={handleMenu}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <Header element={showNav} actualizarestado={actualizarestado}/>
  </> 
  );
}
