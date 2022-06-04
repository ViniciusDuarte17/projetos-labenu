import { useState, useEffect } from "react";
import axios from "axios";

const headers = {
    headers: {
      auth: localStorage.getItem('token')
    }
}

export  const useRequestData = ( url) => {
    
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect( () => {
        setIsLoading(true)
        axios 
        .get(url, headers)
        .then( (res) => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch( (err) => {
            setError(err)
            setIsLoading(false)
        })
    }, [url ])

    return[data,isLoading, error]
 }