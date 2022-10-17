import CartWidget from "./CartWidget/CartWidget";


const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>TIENDA DE DISCOS</h1>
        <ul>
          <li>Discos</li>
          <li>Contacto</li>
        </ul>

        <CartWidget/>
        
    </nav>
  )
}

export default Navbar;