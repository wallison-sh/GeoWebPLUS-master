import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbarlaboratorio.css';
import { AuthContext } from '../../Context/auth';

function NavbarRealEmGraos() {

  const { setLogado } = useContext(AuthContext);

  function Logout() {
    setLogado(false);
    localStorage.removeItem("logado");
  }


  return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container-fluid">

      <a className="navbar-brand" href="/app/home">
        <img src="/Images/logoGeocontrole.png" alt="" height='50px' />
      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/app/home" className="nav-link logout" aria-current="page" >Menu Principal</Link>
          </li>
          <li className="nav-item">
            <Link to="/app/Programacao" className="nav-link logout" aria-current="page" >Programação</Link>
          </li>
          <li className="nav-item">
            <Link to="/app/TelaAmostra" className="nav-link logout" aria-current="page" >Resultado Ensaio</Link>
          </li>
          <li className="nav-item">
            <a href="http://geoweb.net.br/ApiReact/up.php" className="nav-link logout" aria-current="page" >Upload</a>
          </li>
        
          <li className="nav-item">
            <a href="/#" className="nav-link logout" aria-current="page" >Sair</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>;
}

export default NavbarRealEmGraos;