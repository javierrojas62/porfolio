import Header from './components/Header'
import Footer from './components/Footer'
import Presentacion from './components/Presentacion'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Presentacion />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App