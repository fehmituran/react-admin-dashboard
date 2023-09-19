import { Outlet } from "react-router-dom";
import "./Layouts.scss"
import Navbar from "components/Navbar/Navbar";
import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";


const Layouts = () => {
    return (
      <div className="main">
          <Navbar/>
          <div className="container">
              <div className="menuContainer">
                  <Menu/>
              </div>
              <div className="contentContainer">
                  <Outlet/>
              </div>
          </div>
          <Footer/>
      </div>
    )
  }
  
export default Layouts
