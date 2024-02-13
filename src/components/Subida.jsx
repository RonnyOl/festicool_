"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Subida() {
  const [mostrarElemento, setMostrarElemento] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Obtén la posición actual del scroll
      const posicionScroll = window.scrollY;
      // Establece la condición para mostrar u ocultar el elemento
      if (posicionScroll > 1000) {
        setMostrarElemento(true);
      } else {
        setMostrarElemento(false);
      }
    };

    // Agrega un event listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {mostrarElemento && (
        <div className="subida">
          <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  to="navTop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-big-up-lines"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ED7D31"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3z" />
              <path d="M9 21h6" />
              <path d="M9 18h6" />
            </svg>
          </ScrollLink>
        </div>
      )}
    </>
  );
}
