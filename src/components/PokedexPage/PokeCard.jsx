import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

    const [ pokemon, getPokemon ] = useFetch(url)

    const navigate = useNavigate()

    useEffect(() => {
        getPokemon()
    }, [])

    const handleNavigate = () => {
      navigate(`/pokedex/${pokemon.id}`)
    }

    return (
<article className={`poke__card ${pokemon?.types[0].type.name}-gradient ${pokemon?.types[0].type.name}-border`} onClick={handleNavigate}>
      <header className={`poke__header`}>
        <img className="poke__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="poke__section">
        <h3 className="poke__title">{pokemon?.name}</h3>
        <div className="poke__info">
        <h4 className="poke__types">Types</h4>
        <ul className="poke__type__list">
          {
            pokemon?.types.map(typeInfo => (
              <li className={`poke__item ${typeInfo.type.name}-gradient`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
        <hr />
        <h4 className="poke__ability">Abilities</h4>
        <ul className="poke__ability__list">
          {
            pokemon?.abilities.map(ability => (
              <li key={ability.ability.url}>
                <span className="poke__ability__item">{ability.ability.name}</span>
              </li>
            ))
          }
        </ul>
        </div>
        <hr />
        <h4 className="poke__stat">Stats</h4>
        <ul className="poke__stat__list">
          {
            pokemon?.stats.map(statInfo => (
              <li className="poke__stat__item" key={statInfo.stat.url}>
                <span className="poke__stat__name">{statInfo.stat.name}</span>
                <span className="poke__stat__info">{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
    )
}

export default PokeCard