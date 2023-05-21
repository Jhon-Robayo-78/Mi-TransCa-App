import { Link } from "react-router-dom";

const Navbar = ()=>{
    
  return(
  <div className="navbar">
    <div className="left">
      <Link to='routes' >rutas</Link>
    </div>
    <div className="center">
      <Link to='/' >inicio</Link> 
    </div>
    <div className="right">
      <Link to='/UserView' >Mi transca</Link>
    </div>
  </div>
  )
}
  
export default Navbar;