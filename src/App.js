import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavBar';
import Footer from './components/footer/Footer';
import Inicio from './components/paginas/Inicio';
import Acerca from './components/paginas/Acerca';
import Disponibilidad from './components/servicios/disponibilidad/Disponibilidad';
import Traspaso from './components/servicios/traspasoPaja/Traspaso';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}>
        </Route>
        <Route exact path='/acerca' element={<Acerca></Acerca>}>
        </Route>
        <Route exact path='/disponibilidad' element={<Disponibilidad></Disponibilidad>}></Route>
        <Route exact path='/traspaso' element={<Traspaso></Traspaso>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>

  );
}

export default App;
