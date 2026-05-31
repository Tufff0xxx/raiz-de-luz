import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Raíz de Luz</h2>
      </div>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#coleccion">Colección</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a
        href="https://wa.me/54351TU_NUMERO"
        target="_blank"
        rel="noreferrer"
        className="btn-nav"
      >
        Pedir Ahora
      </a>
    </header>
  );
}