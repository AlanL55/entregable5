import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate} from "react-router-dom"

const HomePage = () => {


   const inputTrainer = useRef()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const handleTrainer = (e) => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
   }

  return (
  <>
    <div className="home__container">
      <div className="home__card">
        <img className="home__img" src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1696809600&Signature=V44S9-C5CW3~oJNIC8RAFxWRHjyKAzRrieKRXDlHptOx5Z97pJchmimmV7Yo5vTf-BR40ngtRGkN6q5jYJRAFeH5T6K0WQOfZ9XdGaxNXYiSbKsH0JThQ289VDJdXwABQY~UK8YDQVO8IR9K10V0Mzf40qh5N9uDrW4xfdrdEK2em8OIISB5FIb4c-ZGRu-r~KWs0vDMBUocFJhEyiPWG4ctBZUMI8fQZMFmXiN1h8cxhwYbEal91P1e1564G6Zgi3NRB4EiEVUmgCOiMSdx3FHGJGMLtoIwhMXA8Pkqea7joQ0~mR1GfOusAD7avfsoaanl~yXkpUU45ytpmfTdSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        <h2 className="home__welcome">Hi Trainer!</h2>
        <p className="home__text">Let's get start, please give me your trainer name</p>
        <form className="home__form" onSubmit={handleTrainer} action="">
          <input className="home__input" ref={inputTrainer} type="text" />
          <button className="home__button">Start!</button>
      </form>
      </div>
      <div className="home__rectangle__upper">
      <div className="home__circle">
        <div className="home__circle__minor"></div>
      </div>
      </div>
      <div className="home__rectangle__lower">
      </div>
    </div>
  </>
  )
}

export default HomePage