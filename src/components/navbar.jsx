import { Link } from "react-router-dom";
import './css/navbar.css';
import { useLocation } from 'react-router-dom';

const Navbar = () =>{
  const location = useLocation();
  return(
    <div className="navbar">
    <Link to="routes">
      <div className="navbarOption">
        <img src="/rutasIcon.svg"/>
        <span>Rutas</span>
      </div>
    </Link>

    {location.pathname === '/' ? (
      <Link to="/">
        <div className="navbarOption">
          <img src="/recargaIcon.svg"/>
          <span>Recarga</span>
        </div>
      </Link>
    ) : (
      <Link to="/">
        <div className="navbarOption">
          <img src="/homeIcon.svg"/>
          <span>Inicio</span>
        </div>
      </Link>
    )}

    <Link to="/UserView">
      <div className="navbarOption">
        <img src="/accountIcon.svg"/>
        <span style={{ textDecoration: 'none' }}>MiTransca</span>
      </div>
    </Link>
  </div>
  )
}
  
export default Navbar;