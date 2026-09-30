function ProyectoCard({ proyecto }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title h5">{proyecto.titulo}</h3>
        <p className="card-text">{proyecto.descripcion}</p>
        <div>
          {proyecto.tecnologias.map((tec) => (
            <span key={tec} className="badge bg-secondary me-1">{tec}</span>
          ))}
        </div>
      </div>
      <div className="card-footer bg-transparent border-0">
        {proyecto.demo && (
          <a href={proyecto.demo} target="_blank" className="btn btn-sm btn-primary me-2">Ver demo</a>
        )}
        <a href={proyecto.codigo} target="_blank" className="btn btn-sm btn-outline-dark">Código</a>
      </div>
    </article>
  )
}

export default ProyectoCard