/* eslint-disable @next/next/no-img-element */
"use client";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
export default function ProductosDestacados() {
  const { data, isloading } = useFetch(
    "https://raw.githubusercontent.com/Ronnyzxzz/apiFesti/main/db.json"
  );
  const [arrayCatalogo, setArrayCatalogo] = useState([]);
  const [destacado, setdestacado] = useState(undefined)
const [p1, setp1] = useState(undefined)
const [p2, setp2] = useState(undefined)
const [p3, setp3] = useState(undefined)
const [p4, setp4] = useState(undefined)
  useEffect(() => {
    if (data) {
      setArrayCatalogo([
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
        
      ]);
    }
  }, [data]);

  useEffect(() => {

    if (arrayCatalogo){
        setp1(arrayCatalogo.find( (item) => item.id == 54))
        setp2(arrayCatalogo.find( (item) => item.id == 118))
        setp3(arrayCatalogo.find( (item) => item.id == 55))
        setp4(arrayCatalogo.find( (item) => item.id == 18))
        setdestacado(arrayCatalogo.find( (item) => item.id == 55))
    }
  }, [arrayCatalogo])
  
  const ClickHandler = ( (item) => {
    setdestacado(item)

  })

  return (
    <>
    {destacado && 
      <div className="destacadoContainer">
        <div id="destacado" className="destacadoImg">
            <img src={destacado.imagenes[0]} alt="" />
        </div>
        <div className="destacadoInfo">
            <div className="destacadoInfo-infodestacado">
                <h1>Productos destacados</h1>
                <div>
                <h2>{destacado.nombre}</h2>
                <p>{destacado.descripcion}</p>
                </div>
                
                <Link
              class="btnMensaje inline-block rounded bg-indigo-600 px-5 py-2 mt-5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              href={`/catalogol/${destacado.id}`} passHref
            >
              Más informacion
            </Link>
            </div>
            <div id="destacados" className="destacadoInfo-destacados">
                {p1.id == destacado.id ? null:
                <div>
                    
                    <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                  to="destacado" onClick={() => ClickHandler(p1)}>
                    <img height="100px" width="100px" src={p1.imagenes[0]} alt="" />
                    </ScrollLink> 
                </div>}
                {p2.id == destacado.id ? null:
                <div>
                    
                    <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                  to="destacado" onClick={() => ClickHandler(p2)} href="##">
                    <img height="100px" width="100px" src={p2.imagenes[0]} alt="" />
                    </ScrollLink> 
                </div>}
                {p3.id == destacado.id ? null:
                <div>
               
                    <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                  to="destacado" onClick={() => ClickHandler(p3)} href="##">
                    <img height="100px" width="100px" src={p3.imagenes[0]} alt="" />
                    </ScrollLink> 
                </div>}
                {p4.id == destacado.id ? null:
                <div>
                    
                    <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                  to="destacado" onClick={() => ClickHandler(p4)} href="##">
                    <img height="100px" width="100px" src={p4.imagenes[0]} alt="" />
                    </ScrollLink> 
                </div>
            }
            </div>
        </div>
      </div>
    }
    </>
  );
}
