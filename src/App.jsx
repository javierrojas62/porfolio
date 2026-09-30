import Header from './components/Header'
import Footer from './components/Footer'
import Presentacion from './components/Presentacion'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Presentacion />
        <SobreMi />
        <Tecnologias />
        <Proyectos />

        <section id="contacto" className="py-5">
          <h2>Contacto</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App