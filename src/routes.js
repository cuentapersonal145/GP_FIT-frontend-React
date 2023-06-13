import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomeView from './home';
import Proyectos from './proyectos';

function routes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomeView /> } />
        <Route exact path="/servicio/:id/:nombre" element={ <Proyectos consultar={"requerimientos"}/> } />
        <Route path="*" element={"ERROR 404"} />
      </Routes>
    </Router>
  );
}

export default routes;
