import React from 'react'

export default function Nosotros() {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="Party"
          src="https://i.imgur.com/kaqqSAL.png"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Sobre nosotros</h2>

        <p class="mt-4 text-gray-600">
        Somos un negocio familiar experto en cotillones artesanales. Dedicandonos a ofrecer una amplia variedad de productos de alta calidad que añaden un toque festivo y colorido a cada fiesta, reunión u ocasión especial.
        </p>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
        <img
          alt="Party"
          src="https://i.imgur.com/3F4TCKl.png"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 id="dondestamos" class="text-3xl font-bold sm:text-4xl">¿Dónde estámos?</h2>

        <p class="mt-4 text-gray-600">
        Estamos ubicados en zona sur, Lomas de Zamora
        </p>
      </div>
    </div>
  </div>

</section>

  )
}
