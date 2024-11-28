 
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Home from "./Components/Pages/Home"
import Portifolio from "./Components/Pages/Portifolio";
import Game from "./Components/Pages/Game";

import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";
import Container from "./Components/Layouts/Container";

function App() {
  return (
    <Router>
      <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/Game" element={<Game />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Portifolio" element={<Portifolio />} />
          </Routes>
        </Container>
      <Footer/>
    </Router>
  );
}

export default App;
