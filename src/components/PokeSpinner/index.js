import pokeBallIcon from '../../assets/pokeBallIcon.svg'
import Style from './style.module.css'

function PokeSpinner() {
  return (
    <div className={Style.container}>
      <img src={pokeBallIcon} alt="pokeball" className={Style.pokeSpinner}/>
    </div>
  )
}

export default PokeSpinner
