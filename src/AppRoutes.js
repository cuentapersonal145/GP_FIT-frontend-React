import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// import HomeView from './home';
// import Product from './product';
import HomeView from './home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        {/* <Route exact path="/productos/:id"> <Product /> </Route> */}
        <Route path="*" element={"ERROR 404"} />
      </Routes>
    </Router>
  );
}

export default App;
