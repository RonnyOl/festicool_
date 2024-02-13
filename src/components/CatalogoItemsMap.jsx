/* eslint-disable react/jsx-key */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function CatalogoItemsMap({ data }) {
  return data.map((item) => (
    //         <a href="#" class="group relative block bg-black">
    //   <img
    //     alt="Developer"
    //     src={item.imagenes[0]}
    //     class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    //   />

    //   <div class=" item-container-maped relative p-4 sm:p-6 lg:p-8">
    //     <p class="text-sm font-medium uppercase tracking-widest text-pink-500">{item.serie}</p>

    //     <p class="text-xl font-bold text-white sm:text-2xl">{item.nombre}</p>

    //     <div class="mt-32 sm:mt-48 lg:mt-64">
    //       <div
    //         class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
    //       >
    //         <p class="text-sm text-white">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
    //           quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </a>

    <Link href={`/catalogol/${item.id}`} class="item-container-maped group relative block bg-black">
      <img
        style={{textAlign:"center"}}
        alt="Developer"
        src={item.imagenes[0]}
        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div class="relative p-4 sm:p-6 lg:p-8">
        <p class="text-sm font-medium uppercase tracking-widest text-orange-400">
          {item.serie}
        </p>

        <p class="text-xl font-bold text-white sm:text-2xl">{item.nombre}</p>

        <div style={{marginTop:"320px"}}>
          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p class="text-sm text-white">{item.descripcion}</p>
            <Link
              class="btnMensaje inline-block rounded bg-indigo-600 px-5 py-2 mt-5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              href={`/catalogol/${item.id}`} passHref
            >
              Más informacion
            </Link>
          </div>
        </div>
        
      </div>
    </Link>
  ));
}
