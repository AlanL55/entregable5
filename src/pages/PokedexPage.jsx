import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch";
import { useEffect,  useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import Pagination from "../components/PokedexPage/Pagination";
import Loader from "../components/PokedexPage/Loader";

const PokedexPage = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const [pokePerPage, setPokePerPage] = useState(40)

    const [actualPage, setActualPage] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [typeSelected, setTypeSelected] = useState('allPokemons')

    const trainer = useSelector(store => store.trainer)

    const inputSearch = useRef()

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=800'
    const [ pokemons, getPokemons, getTypePokemon, isLoading] = useFetch(url)

    useEffect(() => {
        if(typeSelected === 'allPokemons'){
            getPokemons()
        }else{
            getTypePokemon(typeSelected)
        }
        getPokemons()
    }, [typeSelected])

    const handleSearch = (e) => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }



    const indexOfLastPoke =  currentPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

    const pokeFilter = pokemons?.results.filter(poke => poke.name.includes(inputValue))

    const currentPoke = pokeFilter?.slice(indexOfFirstPoke, indexOfLastPoke);

    return (
        <div className="pokedex__container">
            <img className="pokedex__img" src="https://benjamin-flores.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3ce5ae02-7933-496c-8bbe-b8d42997e98c%2FUntitled.png?table=block&id=50aeaeaf-63c3-41ff-975f-e582c1d3a9fd&spaceId=35066e2c-3339-430c-80ca-dae715f7e3af&width=2000&userId=&cache=v2" alt="" />
            <p className="pokedex__greet">Welcome {trainer} you can find your favorite pokemon here!</p>
            <div className="pokedex__menus">
            <form className="pokedex__form" onSubmit={handleSearch} action="">
                <input className="pokedex__input" ref={inputSearch} type="text" />
                <button className="pokedex__button">Search</button>
            </form>
            <SelectType 
                setTypeSelected={setTypeSelected}
            />
            </div>
            <div className="pokedex__pagination">
            </div>
            {
                isLoading
                ? <Loader />
                : (<> 
                    <Pagination 
                        pokePerPage={pokePerPage}
                        totalPoke={pokemons?.results.length}
                        paginate={paginate}
                        actualPage={actualPage}
                        setActualPage={setActualPage}
                        isLoading={isLoading}
                        currentPage={currentPage}
                    />
                    {
                        isLoading
                        ? <Loader />
                        : 
                        <div className="pokedex__cards">
                            {
                            currentPoke?.map(poke => (
                                    <PokeCard 
                                        key={poke.url}
                                        url={poke.url}
                                    />
                                ))
                            }
                    </div>
                    }                  

                </>)
            }

        </div>
    )
}

export default PokedexPage