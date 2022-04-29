import UserIcon from "assets/images/userIcon.png"

export const Navbar = () => {
  return(
    <div className="navbar">
      <div className="navbar__item">
        <span className="navbar__item-title">
          Dronocargo
        </span>
      </div>
      <div className="navbar__item">
        <span className="navbar__item-user">
          Regina Zepeda <img src={UserIcon} alt="user_icon" className="navbar__item-icon" />
        </span>
      </div>
    </div>
  )
}