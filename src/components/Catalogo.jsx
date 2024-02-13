"use client"
import { useEffect, useState } from 'react'
import CatalogoItems from './CatalogoItems'
import Subida from './Subida'
export default function Catalogo() {
  const [mostrarElemento, setMostrarElemento] = useState(false);
    const [mostrarCatalogo, setmostrarCatalogo] = useState(false)

    const abrirCatalogo = () => {
        setmostrarCatalogo(!mostrarCatalogo)
    }

  return (
    <> 
    <div className="catalogo-container">
        <div className="catalogo-subcontainer ">
          <h2>Cátalogo</h2>
          <hr/>
          <CatalogoItems></CatalogoItems>
        

          </div>
    </div></>
  )
}
