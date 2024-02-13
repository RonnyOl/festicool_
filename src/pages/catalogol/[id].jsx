/* eslint-disable @next/next/no-img-element */
// pages/catalogo/[id].jsx
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";


export const getStaticPaths = (async () => {
  // Obtener los IDs de los productos dinámicamente
  const res = await fetch("https://raw.githubusercontent.com/Ronnyzxzz/apiFesti/main/db.json");
  const data = await res.json()
 
  const productoArray = [
          ...data.productos.selfiesSeries,
          ...data.productos.Selfies,
          ...data.productos.pinatas,
          ...data.productos.adornosTortaImp,
          ...data.productos.centros3D,
          ...data.productos.figuras,
          ...data.productos.letras,
          ...data.productos.pinatasCirculares,
          ...data.productos.pinatasFiguras,
          ...data.productos.pinatasHex,
          ...data.productos.pinatasSiluetas,
          ...data.productos.pinches,
          ...data.productos.selfiesImpresos,
          ...data.productos.tupperCake
  ];

  const paths = productoArray.map((producto) => ({
    params: { id: producto.id.toString() },
  }));

  return { paths, fallback: false };
})

export const getStaticProps = (async (context) => {
  // Obtener datos específicos del producto usando el ID
  const id = context.params.id
  const res = await fetch("https://raw.githubusercontent.com/Ronnyzxzz/apiFesti/main/db.json");
  const data = await res.json()

  const productoArray = [
    ...data.productos.selfiesSeries,
          ...data.productos.Selfies,
          ...data.productos.pinatas,
          ...data.productos.adornosTortaImp,
          ...data.productos.centros3D,
          ...data.productos.figuras,
          ...data.productos.letras,
          ...data.productos.pinatasCirculares,
          ...data.productos.pinatasFiguras,
          ...data.productos.pinatasHex,
          ...data.productos.pinatasSiluetas,
          ...data.productos.pinches,
          ...data.productos.selfiesImpresos,
          ...data.productos.tupperCake
  ];

  const producto = productoArray.find((item) => item.id.toString() === id);

  return {
    props: { producto },
  };
})

export default function Page({ producto }) {
  
  // const { data, isLoading } = useFetch(
  //   "https://api.npoint.io/b8a8490587d620247d1b"
  // );
  // const [productoArray, setproductoArray] = useState([]);
  // const [producto, setproducto] = useState("");

  // useEffect(() => {
  //   if (data) {
  //     setproductoArray([
  //       ...data.productos.pinatas,
  //       ...data.productos.Selfies,
  //       ...data.productos.selfiesSeries,
  //     ]);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   setproducto(productoArray.find((item) => item.id == id));
  // }, [productoArray]);

  const [isHover, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Navbar />
      {producto ? (
        <>
          <div className="itemDetailed-Container">
            <div
              
              className="itemDetailed-container-img"
            >
              <img onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
                src={
                  isHover
                    ? producto.imagenes[1]
                      ? producto.imagenes[1]
                      : producto.imagenes[0]
                    : producto.imagenes[0]
                }
                alt=""
                srcset=""
              />
            </div>

            <div className="itemDetailed-container-info">
              <div className="itemDetailed-info">
                <span>Serie</span>
                <h5> <b>{producto.serie}</b></h5>
                <h2> {producto.nombre}</h2>
                <p>
                  {producto.descripcion}
                </p>
               {producto.precio ?  <p style={{marginTop: "1rem"}}  > <b>{producto.precio}$</b> ARS</p> :  <p style={{marginTop: "1rem"}}  > <b>Consultá por el precio</b> </p>}
                <div className=" spameo mt-4">
                  <p>¿Estás interesado?   Clická en el botón para contactarnos</p>
                  <button href="" class="btnMensaje mt-3 text-white font-bold py-2 px-4 rounded-full">
                    <a href={`https://api.whatsapp.com/send?phone=5491166699932&text=¡Hola! Me interesó el producto ${producto.nombre}`}>
                    Enviar mensaje</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}

      <Footer />
    </>
  );
}
