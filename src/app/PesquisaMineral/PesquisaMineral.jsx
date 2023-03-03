import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';
import './PesquisaMineral.css';
import axios from 'axios'; // npm i axios
import SweetAlert from 'react-bootstrap-sweetalert';
import clientesPDF from '../Reports/Clientes/clientes';

function PesquisaMineral() {
  //eslint-disable-next-line
  const api = 'http://18.206.163.134/ApiReact/';
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
  function deleteUser(id) {

  }

  async function listarDados() {
    const res = await axios.get(api + 'ListarProcessoSondagemPesquisaMineral.php?Processo=' + amostra);
    setLista(res.data.result);
    console.log(res.data.result);
    listarPerf(listaperfuracao)
  }
  async function listarPerf() {
    const res = await axios.get(api + 'ListarApropriacaoSondagemPsquisaMineral.php?Processo=' + amostra);
    setListaPerfuracao(res.data.result);
    listarMaterial(listamaterial)
  }
  async function listarMaterial() {
    const res = await axios.get(api + 'ListarControleConsumivel.php?Processo=' + amostra);
    setListaMaterial(res.data.result);
    listarControleLama(listacontrolelama)
  }
  async function listarControleLama() {
    const res = await axios.get(api + 'ListarControleLama.php?busca=' + amostra);
    setListaControleLama(res.data.result);
  }

  
  return <div>
    <Navbar />
    <div className="container-fluid titulo">


      <div className="row">
        <div className="col-4">
          {/* <Link to='/app/novocliente' className="btn btn-primary btn-cli" type="button"><i className="fas fa-plus"></i> Cliente</Link> */}
          <button onClick={(e) => clientesPDF(lista, listaperfuracao, listamaterial, listacontrolelama)} className="btn btn-danger btn-cli" type="button" id="button-addon2"><i className="far fa-file-pdf"></i> Gerar PDF</button>
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
      <ListaClientes arrayClientes={lista} />

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

export default PesquisaMineral;