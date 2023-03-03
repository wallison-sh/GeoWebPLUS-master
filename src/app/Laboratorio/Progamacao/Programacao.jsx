import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import ListaProgramacaoGrid from '../Progamacao/ListaProgramacao/listaprogramacao';
import './Programacao.css';
import axios from 'axios'; // npm i axios
import SweetAlert from 'react-bootstrap-sweetalert';
import clientesPDF from './PDFProgramacao/PDFProgramacao';
import Conexao from '../../Config/conexao';
import VariavelGlobal from '../../Config/Variavelglobal'
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";
function Programacao() {

  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
  const [excluido, setExcluido] = useState('');
  const [confirmacao, setConfirmacao] = useState(false);
  const [confirmacaoId, setConfirmacaoId] = useState('');
  const [lista, setLista] = useState([]);
  const [listaperfuracao, setListaPerfuracao] = useState([]);
  const [listamaterial, setListaMaterial] = useState([]);
  const [listacontrolelama, setListaControleLama] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [processo, setProcesso] = useState('')
  const [caspsula1, setCapsula1] = useState('')
  const [amostra, setAmostra] = useState('')
  const [masamosecacap1, setMasamosecacap1] = useState('')
  const ref = React.createRef();
  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [8.5, 11]
  };
  function deleteUser(id) { }

  async function listarDados() {
    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntacta.php?Processo=' + amostra);
    setLista(res.data.result);
    console.log(res.data.result);

    setTexto(res.data.success)

    VariavelGlobal.var3 = amostra
  }



  return <div>
    <Navbar />
    <Pdf targetRef={ref} filename="Programacao.pdf" options={options} x={.2} y={.5} scale={0.6} >
      {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
    </Pdf>
    <div className="container-fluid titulo">


      <div className="row" >
        <div className="col-4">

          {/* <Link to='/app/novocliente' className="btn btn-primary btn-cli" type="button"><i className="fas fa-plus"></i> Cliente</Link> */}
          <button onClick={(e) => clientesPDF(lista)} className="btn btn-danger btn-cli" type="button" id="button-addon2"><i className="far fa-file-pdf"></i> Gerar PDF</button>


          {/* <Link to='/app/novocliente' className="btn btn-primary btn-cli" type="button"><i className="fas fa-plus"></i> Cliente</Link> */}
          {texto !== '' ? <Link to="/app/ProgramacaoIntacta"><button className="btn btn-danger btn-cli" type="button" id="button-addon2"> Programacao Intacta</button></Link> : null}

        </div>


        <div className="col-8">
          <div className="input-group mb-3">

            <input onChange={(e) => setAmostra(e.target.value)} type="text" className="form-control" placeholder="Pesquisar processo" aria-describedby="button-addon2" />
            <button onClick={(e) => listarDados(lista)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
          </div>
        </div>
      </div>
      <p>{lista.processo}</p>
      <p>{caspsula1}</p>
      <p>{masamosecacap1}</p>
      <div ref={ref}  >
        <ListaProgramacaoGrid arrayClientes={lista} />
      </div>


      {
        confirmacao ? <SweetAlert
          warning
          showCancel
          showCloseButton
          confirmBtnText="Sim"
          confirmBtnBsStyle="danger"
          cancelBtnText="Não"
          cancelBtnBsStyle="light"
          title="Exclusão"
          onConfirm={() => deleteUser(confirmacaoId)}
          onCancel={() => setConfirmacao(false)}
          reverseButtons={true}
        >
          Deseja excluir o cliente selecionado?
        </SweetAlert> : null}

    </div>
  </div>

}

export default Programacao;