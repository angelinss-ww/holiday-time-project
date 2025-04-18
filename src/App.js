
import holydaytime from "./img/holiday-time.svg"
import carpatianhouse from "./img/carpatiam-house.svg"
import family from "./img/family.svg"
import "./styles/style.css"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="App">
      <body>
      <Navbar/>
      <main className="main">
      <div className = "main-holiday-time">
        <img src={holydaytime} alt="holydaytime" className="holydaytime"/> 
        <h1>Holiday Time</h1>
        <h2>Автентичний відпочинок серед українського колориту!</h2>
      </div>
      <div className= "main-slider">
        <img src={carpatianhouse} alt="carpatianhouse" className="carpatianhouse"/>
        <div className="slider-text"><span>Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. <br/>
        Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас.</span></div>
        <a href="#" className="review">Переглянути &rarr;</a> 
      </div>
      <div className="active-recreation">
        <div className="active-rec-img"><img src={family}/></div>
        <div className="active-rec-text"><span>Активний відпочинок у нетипових лоцаціях.<br/> Незаймана природа та місцевий колорит<br/>
        подарують Вам незабутні враження.</span></div>
      </div>
      <div className="callback">
        <h1>Зворотній зв'язок</h1>
        <span>Ім'я</span>
        <input className="callback-name"  placeholder="Введіть ім'я"/>
        <span>Номер телефону</span>
        <input lassName="callback-number"  placeholder="Введіть номер телефону"/>
        <button className= "CallBackButton" onClick = "0">Запросити виклик</button>

      </div>

      </main>
      <footer className="footer">
        <span>&copy; 2025 HolidayTime.  All rights reserved.</span>
      </footer>
      </body>
    </div>
  );
}

export default App;
