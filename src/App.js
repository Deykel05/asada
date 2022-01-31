import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavBar';
import Footer from './components/footer/Footer';
import Inicio from './components/Pages/Inicio';
import Acerca from './components/Pages/Acerca';
import Disponibilidad from './components/Services/Pages/Disponibilidad';
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
        <Route exact path='/disponibilidad' element={<Disponibilidad></Disponibilidad>}>

        </Route>
      </Routes>
      <Footer></Footer>
    </Router>

  );
}

export default App;
