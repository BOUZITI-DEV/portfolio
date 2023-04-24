import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Certifs from './components/Certifs';
import Cursus from './components/Cursus';
import Projects from './components/Projects';
import MainPage from './components/MainPage';
import Img from './components/Img';
import Footer from "./components/Footer";

const styles = {
  background: '#00C2BA',
  color: 'white',
  padding: '20px',
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <div style={styles}> 
          <header className="header text-center">
            <Img />
            <h1>BOUZITI Jaouad</h1>
            <h2>Elève ingénieur en informatique et réseau, option MIAGE</h2>
          </header>
          <br></br>
          <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mx-auto" >
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Cursus" className="nav-link">
                  Cursus
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Projects" className="nav-link">
                  Projets académiques
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Certifs" className="nav-link">
                  Cértificats
                </Link>
              </li>
            </ul>
          </nav>
          </div>
          <div className="container mt-4">
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/Cursus" element={<Cursus />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Certifs" element={<Certifs />} />
            </Routes>
          </div>
          <br></br>
          <br></br>
          <footer className="footer text-center">
            <p>
              Email : <a class="link-opacity-200" rel="noopener" target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">jaouadbouziti@gmail.com</a>
            </p>
          </footer>
          <Footer></Footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
