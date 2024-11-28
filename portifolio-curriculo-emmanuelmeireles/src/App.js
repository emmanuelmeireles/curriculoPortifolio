import './App.css'
import {BrowserRouter, Routes, Router} from 'react-router-dom'
import Home from '.src/pages/Home'
import Projects from '.src/pages/Projects'
import Contact from '.src/pages/Contacts'

function App() {

    return (
        <>
            <BrowserRouter>
                <nav className='flex'>
                    <div id = 'nav-brand'> 
                        <h3>Quem sou?</h3>                      
                    </div>

                    <div id="nav-options">
						<span>
							<Link to="Home">Home</Link>
						</span>
						<span>
							<Link to="/Home">Projetos</Link>
						</span>
						<span>
							<Link to="/contact">Contate-me</Link>
						</span>
					</div>

				</nav>

				<div className='flex header'>
					<div className="user-info">
						<h1>Emmanuel Meireles Silva</h1>
						<p>Ola vistitante! Eu mesmo que criei esse portifolio sobre mim. Gostaria de aperfeiçoa-lo com que posso aprender trabalhando na área.</p>
					</div>

					<div className="user-pic">
						<img src="https://bit.ly/3oIs4Lj" alt ="" className="img-responsive img-circle"/>
					</div>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<h1>404 - Pagina nao encontrada</h1>} />
				</Routes>

            

                
            
            </BrowserRouter>
        
        </>

    )
    
}