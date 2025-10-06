import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculadora">Calculadora</Link>
        </li>
        <li>
          <Link to="/sobrenos">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
