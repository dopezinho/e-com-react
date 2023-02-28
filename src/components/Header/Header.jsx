import mangoIcon from "../../assets/Mango.png"
import "./index.scss"

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={mangoIcon} alt="mango icon" />
      <p className="header__paragraph">num é</p>
      <p className="header__paragraph header__paragraph--red">é</p>
    </div>
  )
}

export default Header