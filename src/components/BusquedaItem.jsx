import React, { useEffect, useState } from 'react'
import CatalogoItemsMap from './CatalogoItemsMap';
import useFetch from '@/hooks/useFetch';

export const BusquedaItem = ({value}) => {
    const { data, isLoading } = useFetch("https://raw.githubusercontent.com/Ronnyzxzz/apiFesti/main/db.json");
    const [arrayInfo, setarrayInfo] = useState([]);
    const [arrayInfoFiltered, setarrayInfoFiltered] = useState([]);
    useEffect(() => {
      
      if (data) {
        
        setarrayInfo([
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
        setarrayInfoFiltered([
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
      if (data) {
        // Filtra el array original (arrayInfo) y actualiza el estado
        const filteredArray = arrayInfo.filter((entry) =>
          entry.nombre.toLowerCase().includes(value.toLowerCase()) || entry.serie.toLowerCase().includes(value.toLowerCase())
        );
        setarrayInfoFiltered(filteredArray);
      }
    }, [value]);
  
    return (
      <div>
        {isLoading ? (
          <span class="loader"></span>
        ) : data == null ? (
          <p>Error con la informacion</p>
        ) : value.length < 2 ? <p></p>
        :  (
          <div className="pb-8 mt-5 flex justify-center flex-wrap gap-2"> 
            <CatalogoItemsMap data={arrayInfoFiltered} ></CatalogoItemsMap>
          </div>
        )
        }
      </div>
    );
}
