import "./Navbar.scss";
import search from "../../img/search.svg";
import app from "../../img/app.svg";
import expand from "../../img/expand.svg";
import notifications from "../../img/notifications.svg";
import settings from "../../img/settings.svg";
import logo from "../../img/logo.svg";


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <span>FtAdmin</span>
        </div>
        <div className="icons">
          <img src={search} alt="" className="icon" />
          <img src={app} alt="" className="icon" />
          <img src={expand} alt="" className="icon" />
          <div className="notification">
            <img src={notifications} alt="" />
            <span>1</span>
          </div>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <span>Fehmi</span>
          </div>
          <img src={settings} alt="" className="icon" />
        </div>
      </div>
    );
  };
export default Navbar
