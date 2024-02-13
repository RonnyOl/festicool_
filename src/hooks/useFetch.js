import { useEffect, useState } from "react"

export default function useFetch(url) {
    
    const [dataFetch, setdata] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const getFetch = async() =>{
        try{
        const res = await fetch(url)
        const data = await res.json()
        setdata({
            data: data,
            isLoading: false,
            errors: null
        })
        }catch{
            setdata({
                data: null,
                isLoading: false,
                errors: true
            })
        }
    }
    useEffect( () => {
        if (!url) return
            getFetch()
        
    }, [url])

    return dataFetch;

  }
