
import './App.css';
import Navbar from './componentes/Navbar';
import Presentation from './componentes/Presentation';
import Skills from './componentes/Skills';
import Projects from './componentes/Projects';
import Footer from './componentes/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App;
