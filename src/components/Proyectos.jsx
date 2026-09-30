import proyectos from '../data/proyectos'
import ProyectoCard from './ProyectoCard'

function Proyectos() {
  return (
    <section id="proyectos" className="py-5">
      <h2 className="mb-4">Proyectos</h2>
      <div className="row g-4">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="col-md-6 col-lg-4">
            <ProyectoCard proyecto={proyecto} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos