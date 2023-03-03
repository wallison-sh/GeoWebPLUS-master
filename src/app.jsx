import React, { useContext } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { AuthContext } from './app/Context/auth.jsx';

/* Paginas */
  import Site from './site/site.jsx';
import Login from './app/Login/login';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novocliente';
import EditarCliente from './app/EditarCliente/editarcliente';
import PesquisaMineral from './app/PesquisaMineral/PesquisaMineral';
import Laboratorio from './app/Laboratorio/Laboratorio.jsx';
import listadeterminiacaomassa from './app/Components/ListaAmostra/listadeterminiacaomassaespecificaaparente.jsx';
import Downloand from './app/Downloands/Downloand.jsx';
import Ftp from './app/Sondagem/Ftp.js';
import ResultadoLaboratorio from './app/Laboratorio/Resultado/ResultadoLaboratorio.jsx';
import UploadFile from './app/Laboratorio/UploadFile/UploadFile.js';
import telaAmostra from './app/Laboratorio/TelaAmostra.jsx';
import Programacao from './app/Laboratorio/Progamacao/Programacao.jsx';
import ProgramacaoIntacta from './app/Laboratorio/Progamacao/ProgamacaoIntacta/ProgramacaoIntacta'
import ProgramacaoCompactacao from './app/Laboratorio//Progamacao/ProgamacaoCompactacao/ProgramacaoICompactacao';
import PDFProgramacao from './app/Laboratorio/Progamacao/PDFProgramacao/PDFProgramacao.jsx';
import MassaEspRealEmGraos from   './app/Laboratorio/MassaEspRealEmGraos.js';

function App(){
    const {logado} = useContext(AuthContext);

    function SecureRoute({...params}){
      if (!logado){
        return <Redirect to="/#" />
      } else {
      return <Route {...params} />
      }
    }
    
    return <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Site} />      
      <Route exact path='/app/Login' component={Login} />    
      <Route exact path='/app/novaconta' component={NovaConta} />    
      <Route exact path='/app/resetsenha' component={ResetSenha} />    


      <SecureRoute exact path='/app/home' component={Home} />    
      <SecureRoute exact path='/app/PesquisaMineral' component={PesquisaMineral} />    
      <SecureRoute exact path='/app/Ftp' component={Ftp} />   
      <SecureRoute exact path='/app/UploadFile' component={UploadFile} /> 
      <SecureRoute exact path='/app/telaAmostra' component={telaAmostra} />     
      <SecureRoute exact path='/app/ResultadoLaboratorio' component={ResultadoLaboratorio} /> 
      <SecureRoute exact path='/app/Programacao' component={Programacao} /> 
      <SecureRoute exact path='/app/ProgramacaoIntacta' component={ProgramacaoIntacta} /> 
      <SecureRoute exact path='/app/ProgramacaoCompactacao' component={ProgramacaoCompactacao} /> 
      <SecureRoute exact path='/app/Laboratorio' component={Laboratorio} />    
      <SecureRoute exact path='/app/Downloand' component={Downloand} />    
      <SecureRoute exact path='/app/PDFProgramacao' component={PDFProgramacao} />    
      <SecureRoute exact path='/app/novocliente' component={NovoCliente} />
      <SecureRoute exact path='/app/editarcliente/:id' component={EditarCliente} />
      <SecureRoute exact path='/app/editarcliente/:id' component={listadeterminiacaomassa } />

      <Route exact path='/app/realemgrao' component={MassaEspRealEmGraos } />
      </Switch>
    </BrowserRouter>;
  }
 
export default App;