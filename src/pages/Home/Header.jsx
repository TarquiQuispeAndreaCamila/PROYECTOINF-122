import logo from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div id="cabecera">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <h1>GENERACIONES DE COMPUTADORAS</h1>
      </div>

      <div id="navegador">
        <nav>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="mainicon">
            <div className="menu">
              <i className="bi bi-list"></i>
            </div>
          </label>
          <ul>
            <li>
              <a href="#" className="active"></a>
            </li>
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/v1/historia">HISTORIA</Link>
            </li>
            <li>
              <Link to="/v2/primeraGeneracion">PRIMERA GENERACION</Link>
            </li>
            <li>
              <Link to="/v1/segundaGeneracion">SEGUNDA GENERACION</Link>
            </li>
            <li>
              <Link to="/v2/terceraGeneracion">TERCERA GENERACION</Link>
            </li>
            <li>
              <Link to="/v1/cuartaGeneracion">CUARTA GENERACION</Link>
            </li>
            <li>
              <Link to="/v2/quintaGeneracion">QUINTA GENERACION</Link>
            </li>
            <li>
              <Link to="/v1/comparacionDeGeneraciones">
                COMPARACION DE GENERACIONES
              </Link>
              <a href="#"></a>
            </li>
            <li>
              <Link to="/v2/impactoEnLaSociedad">IMPACTO EN LA SOCIEDAD</Link>
              <a href="#"></a>
            </li>
            <li>
              <Link to="/v1/perspectivasFuturas">PERSPECTIVAS FUTURAS</Link>
              <a href="#"></a>
            </li>
          </ul>
          <div className="nav-btn"></div>
        </nav>
      </div>
    </header>
  );
}
