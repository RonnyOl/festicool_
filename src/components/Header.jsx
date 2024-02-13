import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(showNav, {actualizarestado}) {

  const [mostrarH, setmostrarH] = useState(showNav.element)
  const handeClick = () =>{
    setmostrarH(!mostrarH)
    actualizarestado(false)
  }
  
  useEffect(() => {

    setmostrarH(showNav.element)
    
  }, [showNav.element]);



  return (
    <>
    {mostrarH  ? 
    <ul class="space-y-1">
  <li onClick={handeClick}>
    <Link href="/" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
      Inicio
    </Link>
  </li>

  <li>
    <Link
    onClick={handeClick}
      href="/catalogo/"
      class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Catalogo
    </Link>
  </li>

  <li>
    <Link
    onClick={handeClick}
      href="/busqueda/"
      class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Busqueda
    </Link>
  </li>
  <li>
    <Link
    onClick={handeClick}
      href="/nosotros/"
      class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Sobre nosotros
    </Link>
  </li>
</ul>:  null}

</>
  )
}
