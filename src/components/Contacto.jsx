function Contacto() {
  return (
    <section id="contacto" className="py-5 text-center">
      <h2 className="mb-3">Contacto</h2>
      <p className="mb-4">Si querés hablar conmigo por un proyecto o lo que sea, escribime.</p>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        <a href="mailto:javierrojas62@gmail.com" className="btn btn-primary">
          Mandame un mail
        </a>
        <a href="https://www.linkedin.com/in/javierrojas62/" target="_blank" className="btn btn-outline-primary">
          LinkedIn
        </a>
        <a href="https://github.com/javierrojas62" target="_blank" className="btn btn-outline-dark">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contacto