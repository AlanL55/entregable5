
const Pagination = ({ pokePerPage, totalPoke, paginate, currentPage }) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <>        
            <div className="pagination__container">
                <ul className="pagination__list">
                {
                pageNumbers.map(number => (
                    <li key={number} className={`pagination__item`}>
                        <span className="pagination__actual"></span>
                        <button onClick={() => paginate(number)} className={`pagination__number ${number === currentPage ? 'is__current' : ''}`}>{number}</button>
                    </li>
                ))} 
                </ul>
            </div>
        

        </>
    )
}

export default Pagination