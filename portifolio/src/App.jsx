 
import {BrowserRouter as Router, Switch} from 'react-router-dom' 
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
      <Switch>
        <Container customClass="min-height">

          <Router exact path="/Game">
            <Game/>
          </Router>
          <Router exact path="/Home">
            <Home/>
          </Router>
          <Router exact path="/Portifolio">
            <Portifolio/>
          </Router>

        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
