import { Route, Routes } from 'react-router-dom';

// import Inicio from './components/Inicio'
// <Inicio></Inicio>
import Inicio from './components/Inicio'
import Indice from './components/Indice'
import Busqueda from './components/Busqueda'
import About from './components/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/indice" element={<Indice />} />
        <Route path="/busqueda" element={<Busqueda />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  );
}

export default App;
