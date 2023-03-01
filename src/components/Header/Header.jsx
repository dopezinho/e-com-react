import "./index.scss"
import mangoIcon from "../../assets/Mango.png"

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={mangoIcon} alt="mango icon" />
    </div>
  )
}

export default Header