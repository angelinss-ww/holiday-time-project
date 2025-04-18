import logo from "./../../img/logo.jpg";
import globus from "./../../img/globus.svg"



const Navbar = () => {
    return ( 
        <header className="header">
              <nav className="nav">
                <div className="nav-logo">
                  <img src={logo} alt="logotype" className="logo"/></div>
                <div className="container">
                  <div><a href="#" className="nav-main">Головна</a></div>
                  <div><a href="#" className="nav-aboutus">Про нас</a></div>
                  <div><a href="#" className="nav-book">Забронювати</a></div>
                  <div><a href="#" className="nav-contacts">Контакти</a></div>
                  <div><a href="#" className="nav-personal-accaunt">Особистий кабінет</a></div>
                  <div><img src={globus} alt="globus" className="globus" /></div>
                  <div><a href="#" className="english-version">En</a></div>
                </div>
              </nav>
              </header>
     );
}
 
export default Navbar;