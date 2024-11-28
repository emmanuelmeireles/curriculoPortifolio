import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
// import logo from '../../img/EU.SVG'
import Container from "./Container"

function Navbar() {
  return(
    <nav className={styles.navbar}>     
      <Container>
        <Link to="/">
          {/*<img src= {logo} alt="marca"></img>*/} 
          home
        </Link>
        <ul>
          <li className={styles.item}>
            <Link to="/Home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Game">Game</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Portifolio">Portifolio</Link>
          </li>
        </ul>
      </Container>
    </nav>
      
  )
}
export default Navbar