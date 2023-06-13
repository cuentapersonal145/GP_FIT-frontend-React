import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomeView from './home';
import E404 from './error/404';
import Proyectos from './proyectos';
import Actividades from './proyectos/actividades';

function routes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomeView /> } />
        <Route exact path="/servicio/:id/:nombre" element={ <Proyectos /> } />
        <Route exact path="/servicio/:id_servicio/:nombre/proyecto_servicio/:id/:nombre_proyecto" element={ <Actividades /> } />
        <Route path="*" element={ <E404/> } />
      </Routes>
    </Router>
  );
}

export default routes;
