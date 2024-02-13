import Link from 'next/link'
import React from 'react'
import ProductosDestacados from './ProductosDestacados'

export default function Inicio() {
  return (
    <>
    
  <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div className="testingg flex items-center justify-center p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        ¡Productos artesanales perfectos para tu fiestas!
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Productos para tus celebraciones y eventos, hechos de una capa gruesa de telgopor resistente.
        <br></br>
        No te pierdas nuestro catálogo con un montón de piñatas, marcos de selfies, centros de mesa y entre otros
      </p>

      <div className="mt-4 md:mt-8">
        <Link
          href="/catalogo/"
          className="btnMensaje inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-orange-500"
        >
          Ver nuestro catálogo
        </Link>
      </div>
    </div>
  </div>

  <img
    alt="Student"
    src="https://i.imgur.com/68lMyqf.png"
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
<ProductosDestacados/>
</>
  )
}
