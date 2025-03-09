import logo from "./img/logo.jpg";
import globus from "./img/globus.svg"
import "./styles/style.css"

function App() {
  return (
    <div className="App">
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
      <header className="header"></header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
