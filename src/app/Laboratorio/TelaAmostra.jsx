import { useState,useEffect } from 'react';
import Navbar from './NavbarLaboratorio/navbarlaboratorio';
import "./Laboratorio.css"
import axios from 'axios'; // npm i axios
import Conexao from '../Config/conexao.js';
import { link, Redirect } from 'react-router-dom';
import VariavelGlobal from '../Config/Variavelglobal'
function TelaAmostra() {

    const [processo, setProcesso] = useState('');
    const [listaprocesso, setListaProcesso] = useState([]);
    const [sucesso, setSucesso] = useState('');
    const[snumero,setSNumero] = useState('')

    async function listarDados() {
        if (processo !== '') {
            setSNumero('N')
            const rese = await axios.get(Conexao.api + 'BuscarProcessoFinalizado.php?Processo=' + processo);
            setListaProcesso(rese.data);

            console.log(rese)
            if (rese.data.Processo !== processo) {

                setSucesso('N');

            } else {
                VariavelGlobal.var1 = processo
                setSucesso('S');

            }
        }else{
        
            setSNumero('S')
        
        }

    }
    useEffect(() => {

        console.log(processo)
        
          })


    return (<div>
        <Navbar />
        
        <div className='tamos'>
        {snumero === 'S' ? <div className="alert alert-danger mt-2" role="alert">Favor digitar número do processo.</div> : null}
        {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">Resultado não liberado.</div> : null}
            <p className='pamostra'>Número da Processo</p>
        </div>
        <div class="mb3">

            <input onChange={(e) => setProcesso(e.target.value)} type="text" class="css-input" />
        </div>
        <div className='dbotao' >

            <button onClick={(e) => listarDados()} class="btn1">Buscar</button>
           
           
            {sucesso === 'S' ? <Redirect to='/app/ResultadoLaboratorio' /> : null}

        </div>


    </div>



    )
}
export default TelaAmostra;


