"use client"
import React, { useState } from 'react'
import { BusquedaItem } from './BusquedaItem'
//rfc
export default function Busqueda() {
    const [InputValue, setInputValue] = useState('')
    const handleInput = (event) => {
        setInputValue(event.target.value)
      }
  
    return (
      <div style={{textAlign:"center"}} className=" pt-8 busquedaContent flex flex-col align-center justify-content-center">
          <div className="BusquedaContent-InputContainer">
          <h2>¡Busca cualquier producto de nuestro cátalogo!</h2>
          <input className="py-8 inputBusqueda" onChange={handleInput} placeholder="Ingresa lo que quieras buscar..."></input>
          </div>
          <BusquedaItem value={InputValue}></BusquedaItem>
      </div>
    )
}
