import tecnologias from '../data/tecnologias'

function Tecnologias() {
  return (
    <section id="tecnologias" className="py-5">
      <h2 className="mb-4">Tecnologías</h2>
      {tecnologias.map((grupo) => (
        <div key={grupo.categoria} className="mb-4">
          <h3 className="h5">{grupo.categoria}</h3>
          <div className="d-flex flex-wrap gap-3">
            {grupo.items.map((tec) => (
              <div key={tec.nombre} className="text-center" style={{ width: '70px' }}>
                <img
                  src={`https://skillicons.dev/icons?i=${tec.icono}`}
                  alt={tec.nombre}
                  width="48"
                  height="48"
                />
                <p className="small mt-1 mb-0">{tec.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Tecnologias