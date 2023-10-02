import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ( { setTypeSelected } ) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = (e) => {
        setTypeSelected(e.target.value)
    }

  return (
    <div className="type__container">
        <select className="type__menu" onChange={handleChange}>
            <option className="type__option" value='allPokemons'>All pokemons</option>
            {
                types?.results.map(typeInfo => 
                <option className="type__option"  key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                )
            }
        </select>
    </div>
  )
}

export default SelectType