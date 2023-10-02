import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"



const PokedexIdPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [ pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [id])


    return (
        <article className="id__page">
         <> 
         <img className="id__title__img" src="https://benjamin-flores.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3ce5ae02-7933-496c-8bbe-b8d42997e98c%2FUntitled.png?table=block&id=50aeaeaf-63c3-41ff-975f-e582c1d3a9fd&spaceId=35066e2c-3339-430c-80ca-dae715f7e3af&width=2000&userId=&cache=v2" alt="" />
                <div className={`id__card ${pokemon?.types[0].type.name}-gradient ${pokemon?.types[0].type.name}-border`}>
                    <section className="id__header">
                        <img className="id__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                    </section>
                    <section className="id__container">
                        <div className="id__title">
                            <h2 className="id__name">{pokemon?.name}</h2>
                            <h2 className="id__number">#{pokemon?.id}</h2>
                        </div>
                        <ul className="id__types">
                            {
                                pokemon?.types.map(typeInfo =>(
                                    <li className={`id__type__item ${typeInfo.type.name}-gradient`} key={typeInfo.type.url}>
                                        <span className="id__typeName">{typeInfo.type.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="id__list">
                            {
                                pokemon?.stats.map(statInfo =>(
                                <li className="id__item" key={statInfo.stat.url}>
                                    <span className="id__statName">{statInfo.stat.name}</span>
                                    <span className="id__statNum">{statInfo.base_stat}<span className="id__statLimit">/ 255</span></span>
                                </li>
                                ))
                            }
                        </ul>
                        <h2 className="id__movements">Movements</h2>
                        <ul className="id__movements__list">
                            {
                                pokemon?.moves.map(moveInfo => (
                                    <li className="id__movement__item" key={moveInfo.move.url}>
                                        <span className="id__movement__name">{moveInfo.move.name}</span>
                                    </li>
                                        
                                ))
                            }
                        </ul>
                    </section>
                </div>
            </>  
            
        
    </article>
    
    )
}

export default PokedexIdPage