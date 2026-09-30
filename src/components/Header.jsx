function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Javier Rojas</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
              <li className="nav-item"><a className="nav-link" href="#proyectos">Proyectos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header