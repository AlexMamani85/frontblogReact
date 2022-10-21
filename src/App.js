import { Route, Routes } from 'react-router-dom';

// import Inicio from './components/Inicio'
// <Inicio></Inicio>
import Inicio from './components/Inicio'
import Indice from './components/Indice'
import BusquedaFront from './components/BusquedaFront'
import BusquedaBack from './components/BusquedaBack'
import Create from './components/Create'

import About from './components/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/indice" element={<Indice />} />
        <Route path="/BusquedaFront" element={<BusquedaFront />} />
        <Route path="/BusquedaBack/:words" element={<BusquedaBack />} />
        <Route path="/BusquedaBack" element={<BusquedaBack />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />        
      </Routes>

    </>
  );
}

export default App;
