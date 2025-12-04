import "../estilos/Navbar.css";
import nasaLogo from "../assets/nasa.png";

function Navbar() {
  return (
    <>
      <div className="Nav">
        <h1>NASA OF THE DAY</h1>
        <img src={nasaLogo} alt="NASA Logo" className="nasa-logo" />
      </div>
    </>
  );
}
export default Navbar;
