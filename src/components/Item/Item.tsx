import DetailsIcon from "assets/images/details_icon.png";
import ExpandIcon from "assets/images/expand_icon.png";
import { useEffect, useRef, useState } from "react";
import { ItemProps } from "types";
import { useNavigate } from "react-router-dom";



export const Item = ({ order_id, technician, technical_check, status, drone, platform }: ItemProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const menuRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", function(event) {
      if (showMenu && menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    });
  }, [showMenu, menuRef]);

  return (
    <div className={technical_check === "Pending" ? "item item-pending": "item"}>
      <div className="item__text">
        <span className="item__text-title">Status</span>
        <span className="item__text-subtitle">{status}</span>
      </div>
      <div className="item__text">
        <span className="item__text-title">Order ID</span>
        <span className="item__text-subtitle">{order_id}</span>
      </div>
      <div className="item__text">
        <span className="item__text-title">Technician</span>
        <span className="item__text-subtitle">{technician}</span>
      </div>
      <div className="item__text">
        <span className="item__text-title">Platform</span>
        <span className="item__text-subtitle">{platform}</span>
      </div>
      <div className="item__text">
        <span className="item__text-title">Drone</span>
        <span className="item__text-subtitle">{drone}</span>
      </div>
      <div className="item__text">
        <span className="item__text-title">Technical Check</span>
        <span className="item__text-subtitle">{technical_check}</span>
      </div>
      <div className="item__actions">
        <button onClick={() => navigate(`${order_id}`)} className="item__actions-button">
          Details 
          <img src={DetailsIcon} alt="user_icon" className="navbar__item-icon" />
        </button>
        <div ref={menuRef}>
          <button onClick={() => setShowMenu(!showMenu)} className="item__actions-button">
            Action 
            <img src={ExpandIcon} alt="user_icon" className="navbar__item-icon" />
          </button>
          <div id="dropdown" className={showMenu? "item__actions-dropdown item__actions-dropdown-show": "item__actions-dropdown"}>
            <button className="item__actions-dropdown-item">
              Edit
            </button>
            <button className="item__actions-dropdown-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}