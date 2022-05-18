import { useState, useEffect } from "react"
import axios from "axios"

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [ err, setErr] = useState('')

    useEffect( () => {
        const datas = async () => {

            try {
                const res = await 
                axios 
                .get(url)
                setData(res.data.results)
            } catch (error) {
                setErr(error)
            }
        }
        datas()
    }, [url])
 
    return [data, err]
}

