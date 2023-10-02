import { useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
    
    const [infoApi, setInfoApi] = useState()
    const [isLoading, setisLoading] = useState(true)
    
    const getApi = () => {
        setisLoading(true)
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => setisLoading(false))
    }

    const getTypeApi = (urlType) => {
        axios.get(urlType)
            .then(res => {
                (res.data)
                const obj = {
                    results: res.data.pokemon.map(e => e.pokemon)
                }
                setInfoApi(obj)
            })
            .catch(err => console.log(err))
            sethasError(true)
}

    return [ infoApi, getApi, getTypeApi, isLoading ]
}

export default useFetch