import React, { useEffect, useState } from "react";
import CatalogoItemsMap from "./CatalogoItemsMap";
import useFetch from "@/hooks/useFetch";
import Subida from "./Subida";
import { Link as ScrollLink } from "react-scroll";
export default function CatalogoItems() {
  const { data, isloading } = useFetch(
    "https://raw.githubusercontent.com/Ronnyzxzz/apiFesti/main/db.json"
  );
  const [arrayCatalogo, setArrayCatalogo] = useState({});

  useEffect(() => {
    if (data) {
      setArrayCatalogo(data.productos);
    }
  }, [data]);

  return (
    <>
      <div id="arriba" className="container-catalogo-map">
        {isloading ? (
          <span class="loader"></span>
        ) : data && arrayCatalogo.Selfies != undefined ? (
          <>
            <div className="indiceC">
              <div className="indice">
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="pinatas"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Piñatas
                </ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="selfies"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Selfies Personalizados</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="selfiesS"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Selfies </ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="adornosTortas"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Adornos de Tortas Impresos</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="centros3D"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Centros 3D</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="figuras"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Figuras</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="letras"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Letras</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="pinatasFiguras"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Piñatas de Figuras enteras</ScrollLink>
               <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="pinatasHex"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Piñatas Hexagonales</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="pinatasSiluetas"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Piñatas con Siluetas</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="pinches"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Pinches</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="SelfiesImpresos"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >Selfies Impresos</ScrollLink>
                <ScrollLink
                  className="cursor-pointer"
                  activeClass="active"
                  to="Tuppercakes"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >TopperCakes</ScrollLink>
              </div>
            </div>
            <h2
              id="pinatas"
              style={{ borderTop: "none" }}
              className="align-self-center"
            >
              Piñatas
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.pinatas.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="selfies" className="align-self-center">
              Selfies Personalizados
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.Selfies.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="selfiesS" className="align-self-center">
              Selfies
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.selfiesSeries.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="adornosTortas" className="align-self-center">
              Adornos de Tortas Impresos
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.adornosTortaImp.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="centros3D" className="align-self-center">
              Centros 3D
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.centros3D.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="figuras" className="align-self-center">
              Figuras
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.figuras.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="letras" className="align-self-center">
              Letras
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.letras.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="pinatasC" className="align-self-center">
              Piñatas Circulares
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.pinatasCirculares.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="pinatasFiguras" className="align-self-center">
              Piñatas de figuras enteras
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.pinatasFiguras.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="pinatasHex" className="align-self-center">
              Piñatas Hexagonales
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.pinatasHex.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="pinatasSiluetas" className="align-self-center">
              Piñatas con siluetas
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.pinatasSiluetas.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="pinches" className="align-self-center">
              Pinches
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.pinches.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="SelfiesImpresos" className="align-self-center">
              Selfies Impresos
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.selfiesImpresos.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>

            <h2 id="Tuppercakes" className="align-self-center">
              TopperCakes
            </h2>
            <div className="catalogoItem-container">
              <CatalogoItemsMap
                data={arrayCatalogo.tupperCake.sort((a, b) =>
                  a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
                )}
              ></CatalogoItemsMap>
            </div>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
