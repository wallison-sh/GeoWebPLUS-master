import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbarIndiceFisico.css';
import { AuthContext } from '../../Context/auth';

function NavbarIndiceFisico() {




  return <div>

    <Link to="/app/ProgramacaoIntacta">  <button className="btnnavintacta" type="button" id="button-addon2"> Programacao Índice físicos </button></Link>
      <Link to="/app/ProgramacaoCompactacao"><button className="btnnavintacta" type="button" id="button-addon2"> Programação Compactação</button></Link>

    <button className="btnnavintacta" type="button" id="button-addon2"> Expansibilidade de colapso</button>
    <button className="btnnavintacta" type="button" id="button-addon2"> Permeabilidade</button>
  </div>

}

export default NavbarIndiceFisico;