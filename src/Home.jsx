import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <h1>✨ Bienvenido a Mundo Unicornios 🦄</h1>
        <p>Descubrí y gestioná criaturas mágicas, productos encantados y más</p>

        <div className="home-buttons">
          <Link to="/unicornios">
            <button className="p-button">Ir a Unicornios</button>
          </Link>
          <Link to="/productos">
            <button className="p-button">Ir a Productos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Home;
