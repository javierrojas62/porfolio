import foto from '../assets/perfil.jpeg'

function Presentacion() {
  return (
    <section id="inicio" className="py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={foto}
            alt="Foto de Javier Rojas"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '220px' }}
          />
        </div>
        <div className="col-md-8">
          <p className="mb-1">Hola, soy</p>
          <h1 className="fw-bold">Javier Rojas</h1>
          <h2 className="h4 text-secondary">Estudiante de Programación Web</h2>
          <p className="mt-3">
            Me gusta hacer páginas y sistemas web. Estoy aprendiendo React y este portfolio es parte de eso.
          </p>
          <a href="#proyectos" className="btn btn-primary me-2">Ver proyectos</a>
          <a href="#contacto" className="btn btn-outline-primary">Contacto</a>
        </div>
      </div>
    </section>
  )
}

export default Presentacion