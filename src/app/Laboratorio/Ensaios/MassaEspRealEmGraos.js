
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import  './MassaEspRealGraos.css';
import React, { useState } from "react";

import conexao from '../../Config/conexao';
import axios from 'axios';



function MassaEspRealEmGraos (){



const [amostra,setAmostra] = useState('')
const [amostra1,setAmostra1] = useState('')
const [select1,setSelect1] = useState('')
const [select2,setSelect2] = useState('')
const [NormaEnsaio,setNormaEnsaio] = useState('')
const [laboratorio,setLaboratorio] = useState('')
const [ipicnometro1,setIpicnometro1] = useState('')
const [ipicnometro2,setIpicnometro2] = useState('')
const [massumdcp1,setMassumdcp1] = useState('')
const [massumdcp2,setMassumdcp2] = useState('')
const [capsula1,setCapsula1] = useState('')
const [capsula2,setCapsula2] = useState('')
const [capsula3,setCapsula3] = useState('')
const [capsula4,setCapsula4] = useState('')
const [capsula5,setCapsula5] = useState('')
const [capsula6,setCapsula6] = useState('')
const [massolumdEcap1,setMassolumdEcap1] = useState('')
const [massolumdEcap2,setMassolumdEcap2] = useState('')
const [massolumdEcap3,setMassolumdEcap3] = useState('')
const [massolumdEcap4,setMassolumdEcap4] = useState('')
const [massolumdEcap5,setMassolumdEcap5] = useState('')
const [massolumdEcap6,setMassolumdEcap6] = useState('')
const [massolsecoEcap1,setMassolsecoEcap1] = useState('')
const [massolsecoEcap2,setMassolsecoEcap2] = useState('')
const [massolsecoEcap3,setMassolsecoEcap3] = useState('')
const [massolsecoEcap4,setMassolsecoEcap4] = useState('')
const [massolsecoEcap5,setMassolsecoEcap5] = useState('')
const [massolsecoEcap6,setMassolsecoEcap6] = useState('')
const [masscap1,setMasscap1] = useState('')
const [masscap2,setMasscap2] = useState('')
const [masscap3,setMasscap3] = useState('')
const [masscap4,setMasscap4] = useState('')
const [masscap5,setMasscap5] = useState('')
const [masscap6,setMasscap6] = useState('')
const [teorumd1,setTeorumd1] = useState('')
const [teorumd2,setTeorumd2] = useState('')
const [teorumd3,setTeorumd3] = useState('')
const [teorumd4,setTeorumd4] = useState('')
const [teorumd5,setTeorumd5] = useState('')
const [teorumd6,setTeorumd6] = useState('')
const [teorumdMd1,setTeorumdMd1] = useState('')
const [teorumdMd2,setTeorumdMd2] = useState('')
const [masspicaguadt1,setMasspicaguadt1] = useState('')
const [masspicaguadt2,setMasspicaguadt2] = useState('')
const [masspicCP1,setMasspicCP1] = useState('')
const [masspicCP2,setMasspicCP2] = useState('')
const [TempEnsaio1,setTempEnsaio1] = useState('')
const [TempEnsaio2,setTempEnsaio2] = useState('')
const [MassEspAgaTempT1,setMassEspAgaTempT1] = useState('')
const [MassEspAgaTempT2,setMassEspAgaTempT2] = useState('')
const [massaespcppv1,setMassaespcppv1] = useState('')
const [massaespcppv2,setMassaespcppv2] = useState('')
const [massaespMd,setMassaespMd] = useState('')
const [obs,setObs] = useState('')



// SALVAR

async function add() {
  
  const obj = { amostra, amostra1, select1,select2, NormaEnsaio, laboratorio, ipicnometro1, ipicnometro2, massumdcp1, massumdcp2, capsula1, capsula2, capsula3, capsula4, capsula5, capsula6, massolumdEcap1, massolumdEcap2,  massolumdEcap3, massolumdEcap4, massolumdEcap5, massolumdEcap6, massolsecoEcap1, massolsecoEcap2,  massolsecoEcap3, massolsecoEcap4, massolsecoEcap5, massolsecoEcap6, masscap1, masscap2, masscap3, masscap4, masscap5, masscap6,  teorumd1, teorumd2, teorumd3, teorumd4, teorumd5, teorumd6, teorumdMd1,teorumdMd2, masspicaguadt1, masspicaguadt2, masspicCP1, masspicCP2, TempEnsaio1, TempEnsaio2, MassEspAgaTempT1, MassEspAgaTempT2, massaespcppv1, massaespcppv2, massaespMd, obs };

  const res = await axios.post(conexao.api + 'SalvarMassaEspecificaGraoWeb.php', obj);
  if (res.data.success === true) {     
  }
   
};



//BUSCAR

async function getItem() {
 
  const res = await axios.get(conexao.api + 'BuscarMassaEspecificaGraoWeb.php?amostra=' + amostra);
  //setAmostra(res.data.amostra);
 // setStatus(res.data.success);
 // setProcesso(res.data.processo);
  setCapsula1(res.data.capsula1);
  setCapsula2(res.data.capsula2);
  setCapsula3(res.data.capsula3);
  setCapsula4(res.data.capsula4);
  setCapsula5(res.data.capsula5);
  setCapsula6(res.data.capsula6);
  setMassolumdEcap1(res.data.masamoumicap1);
  setMassolumdEcap2(res.data.masamoumicap2);
  setMassolumdEcap3(res.data.masamoumicap3);
  setMassolumdEcap4(res.data.masamoumicap4);
  setMassolumdEcap5(res.data.masamoumicap5);
  setMassolumdEcap6(res.data.masamoumicap6);
  setMassolsecoEcap1(res.data.masamosecacap1);
  setMassolsecoEcap2(res.data.masamosecacap2);
  setMassolsecoEcap3(res.data.masamosecacap3);
  setMassolsecoEcap4(res.data.masamosecacap4);
  setMassolsecoEcap5(res.data.masamosecacap5);
  setMassolsecoEcap6(res.data.masamosecacap6);
  setMassumdcp1(res.data.massaumidacorpoprova1);
  setMassumdcp2(res.data.massaumidacorpoprova2);
  setMasspicCP1(res.data.massapicnometrocorpoaguatraco1);
  setMasspicCP2(res.data.massapicnometrocorpoaguatraco2);
  setTempEnsaio1(res.data.temperaturaensaio1);
  setTempEnsaio2(res.data.temperaturaensaio2);
  setIpicnometro1(res.data.picnometro1);
  setIpicnometro2(res.data.picnometro2);
  setNormaEnsaio(res.data.norma);
  setObs(res.data.obs)


  if (res.data.success === false) {
  //  setLoading(false)
  //  falha();
  } else {
 //   setLoading(false)
  }
};



 //CÁLCULOS
 function TeorUmidadeCalc1 (){

  var v1 = document.querySelector("#massolumdEcap1");
  var v2 = document.querySelector("#massolsecoEcap1");
  var v3 = document.querySelector("#masscap1");
  var v4 = document.querySelector("#teorumd1");
  var v11 =  v1.value;
  var v22 = v2.value;
  var v33 =  v3.value;

  var resul1 = (parseFloat(v11) - parseFloat(v22)) ;
  var resul2 = (parseFloat(v22) - parseFloat(v33)) ;
  var resul = (parseFloat(resul1)/parseFloat(resul2))*100
  
  v4.value = resul.toFixed(1);
  console.log(resul);
  }

  function TeorUmidadeCalc2 (){

    var v1 = document.querySelector("#massolumdEcap2");
    var v2 = document.querySelector("#massolsecoEcap2");
    var v3 = document.querySelector("#masscap2");
    var v4 = document.querySelector("#teorumd2");
    var v11 =  v1.value;
    var v22 = v2.value;
    var v33 =  v3.value;
    var resul1 = (parseFloat(v11) - parseFloat(v22)) ;
    var resul2 = (parseFloat(v22) - parseFloat(v33)) ;
    var resul = (parseFloat(resul1)/parseFloat(resul2))*100
    
    v4.value = resul.toFixed(1);
    console.log(resul);
    }

    function TeorUmidadeCalc3 (){

      var v1 = document.querySelector("#massolumdEcap3");
      var v2 = document.querySelector("#massolsecoEcap3");
      var v3 = document.querySelector("#masscap3");
      var v4 = document.querySelector("#teorumd3");
      var v11 =  v1.value;
      var v22 = v2.value;
      var v33 =  v3.value;
      var resul1 = (parseFloat(v11) - parseFloat(v22)) ;
      var resul2 = (parseFloat(v22) - parseFloat(v33)) ;
      var resul = (parseFloat(resul1)/parseFloat(resul2))*100
      
      v4.value = resul.toFixed(1);
      console.log(resul);
      }
      function TeorUmidadeCalc4(){

        var v1 = document.querySelector("#massolumdEcap4");
        var v2 = document.querySelector("#massolsecoEcap4");
        var v3 = document.querySelector("#masscap4");
        var v4 = document.querySelector("#teorumd4");
        var v11 =  v1.value;
        var v22 = v2.value;
        var v33 =  v3.value;
        var resul1 = (parseFloat(v11) - parseFloat(v22)) ;
        var resul2 = (parseFloat(v22) - parseFloat(v33)) ;
        var resul = (parseFloat(resul1)/parseFloat(resul2))*100
        
        v4.value = resul.toFixed(1);
        console.log(resul);
        }
        function TeorUmidadeCalc5 (){

          var v1 = document.querySelector("#massolumdEcap5");
          var v2 = document.querySelector("#massolsecoEcap5");
          var v3 = document.querySelector("#masscap5");
          var v4 = document.querySelector("#teorumd5");
          var v11 =  v1.value;
          var v22 = v2.value;
          var v33 =  v3.value;
          var resul1 = (parseFloat(v11) - parseFloat(v22)) ;
          var resul2 = (parseFloat(v22) - parseFloat(v33)) ;
          var resul = (parseFloat(resul1)/parseFloat(resul2))*100
          
          v4.value = resul.toFixed(1);
          console.log(resul);
          }
          function TeorUmidadeCalc6 (){

            var v1 = document.querySelector("#massolumdEcap6");
            var v2 = document.querySelector("#massolsecoEcap6");
            var v3 = document.querySelector("#masscap6");
            var v4 = document.querySelector("#teorumd6");
            var v11 =  v1.value;
            var v22 =  v2.value;
            var v33 =  v3.value;
            var resul1 = (parseFloat(v11) - parseFloat(v22)) ;
            var resul2 = (parseFloat(v22) - parseFloat(v33)) ;
            var resul = (parseFloat(resul1)/parseFloat(resul2))*100
            
            v4.value = resul.toFixed(1);
            console.log(resul);
            }

            //teor de umidade médio

            function TeorUmdMediaCalc1 (){
              var v1 = document.querySelector("#teorumd1");
             var v2 = document.querySelector("#teorumd2");
             var v3 = document.querySelector("#teorumd3");
             var v4 = document.querySelector("#teorumdMd1");

             var v11 =  v1.value;
             var v22 =  v2.value;
             var v33 =  v3.value;

              if (v11!=="" && v22!=="" && v33!=="" ){ 
               var resul = (parseFloat(v11)+parseFloat(v22)+parseFloat(v33))/3
             
             v4.value = resul.toFixed(1);
             console.log(resul);
              }
              else if (v11!=="" && v22!=="" && v33===""  ) {   
  
               var resul2 = parseFloat(v11) + parseFloat(v22) /2 ;
               v4.value = resul2.toFixed(1);
             }
           
             else if (v11!=="" && v22==="" && v33!=="" ) {   
              
               var resul3 = parseFloat(v11) + parseFloat(v33) /2 ;
               v4.value = resul3.toFixed(1);
             }
             else if (v11==="" && v22!=="" && v33!==""  ) {   
  
               var resul4 = parseFloat(v22) + parseFloat(v33) /2 ;
               v4.value = resul4.toFixed(1);
             }
             else if (v11!=="" && v22==="" && v33===""  ) {   
  
               var resul5 = parseFloat(v11)  /1 ;
               v4.value = resul5.toFixed(1);
             }
             else if (v11==="" && v22!=="" && v33===""  ) {   
  
               var resul6 = parseFloat(v22)  /1 ;
               v4.value = resul6.toFixed(1);
             }

             else if (v11==="" && v22==="" && v33!==""  ) {   
  
               var resul7 = parseFloat(v33)  /1 ;
               v4.value = resul7.toFixed(1);
             }
                     
             else { v4.value = ""}              
              }


              function TeorUmdMediaCalc2 (){
                var v1 = document.querySelector("#teorumd4");
               var v2 = document.querySelector("#teorumd5");
               var v3 = document.querySelector("#teorumd6");
               var v4 = document.querySelector("#teorumdMd2");
  
               var v11 =  v1.value;
               var v22 =  v2.value;
               var v33 =  v3.value;
  
                if (v11!=="" && v22!=="" && v33!=="" ){ 
                 var resul = (parseFloat(v11)+parseFloat(v22)+parseFloat(v33))/3
               
               v4.value = resul.toFixed(1);
               console.log(resul);
                }
                else if (v11!=="" && v22!=="" && v33===""  ) {   
    
                 var resul2 = parseFloat(v11) + parseFloat(v22) /2 ;
                 v4.value = resul2.toFixed(1);
               }
             
               else if (v11!=="" && v22==="" && v33!=="" ) {   
                
                 var resul3 = parseFloat(v11) + parseFloat(v33) /2 ;
                 v4.value = resul3.toFixed(1);
               }
               else if (v11==="" && v22!=="" && v33!==""  ) {   
    
                 var resul4 = parseFloat(v22) + parseFloat(v33) /2 ;
                 v4.value = resul4.toFixed(1);
               }
               else if (v11!=="" && v22==="" && v33===""  ) {   
    
                 var resul5 = parseFloat(v11)  /1 ;
                 v4.value = resul5.toFixed(1);
               }
               else if (v11==="" && v22!=="" && v33===""  ) {   
    
                 var resul6 = parseFloat(v22)  /1 ;
                 v4.value = resul6.toFixed(1);
               }
  
               else if (v11==="" && v22==="" && v33!==""  ) {   
    
                 var resul7 = parseFloat(v33)  /1 ;
                 v4.value = resul7.toFixed(1);
               }
                       
               else { v4.value = ""}              
                }





 function MassaEspCPCalc1 (){

var aa36 = document.querySelector("#massumdcp1");
var aa66 = document.querySelector("#teorumdMd1");
var aa71 = document.querySelector("#masspicaguadt1");
var aa76 = document.querySelector("#masspicCP1");
var aa86 = document.querySelector("#MassEspAgaTempT1");

var aa91 = document.querySelector("#massaespcppv1");

var a1 = aa36.value;
var a2 = aa66.value;
var a3 = aa71.value;
var a4 = aa76.value;
var a5 = aa86.value;

var resul = (( parseFloat(a1)  * 100 / ( 100 + parseFloat(a2) )) / (( parseFloat(a1) * 100 / ( 100 + parseFloat(a2))) + parseFloat(a3) - parseFloat(a4) )) * parseFloat(a5)

aa91.value = resul.toFixed(2);
console.log(resul);

 }

 function MassaEspCPCalc2 () {

  var aa36 = document.querySelector("#massumdcp2");
  var aa66 = document.querySelector("#teorumdMd2");
  var aa71 = document.querySelector("#masspicaguadt2");
  var aa76 = document.querySelector("#masspicCP2");
  var aa86 = document.querySelector("#MassEspAgaTempT2");

  var aa91 = document.querySelector("#massaespcppv2");
 
  var a1 = aa36.value;
  var a2 = aa66.value;
  var a3 = aa71.value;
  var a4 = aa76.value;
  var a5 = aa86.value; 
  var resul = (( parseFloat(a1)  * 100 / ( 100 + parseFloat(a2) )) / (( parseFloat(a1) * 100 / ( 100 + parseFloat(a2))) + parseFloat(a3) - parseFloat(a4) )) * parseFloat(a5)

  aa91.value = resul.toFixed(2);
  console.log(resul); 
   }

   // massa especifica média

   function CalcularMassaEspMDCalc() { 

    var aa91 = document.querySelector("#massaespcppv1");
    var aa92 = document.querySelector("#massaespcppv2");
    var aaa = document.querySelector("#massaespMd");

    var a1  = aa91.value;
    var a2 = aa92.value;  
    
   if (a1!=="" && a2!==""  ){ 
    var resul1 = (parseFloat(a1) + parseFloat(a2)) ;
    var resul = parseFloat(resul1) /2  ;
    aaa.value = parseFloat(resul.toFixed(2));

    console.log( resul.toFixed(2))
   }
   else if (a1!=="" && a2==="" ) {      
    var resul2 = parseFloat(a1) /1 ;
    aaa.value = resul2.toFixed(2);
  }
  else if (a1==="" && a2!=="" ) {   
   
    var resul3 = parseFloat(a2) /1 ;
    aaa.value = resul3.toFixed(2);
  }

  else { aaa.value = ""}
    
   }


  return <body className=" align-items-center text-center form-container ">
<Navbar/>
<form className="container-fluid " >
   <div className="form-floating">

      <div className='titulolaboratorio' >
      <br/> 
      <h1 >Massa específica real em grãos</h1>                 
    </div>

    <br/> 

    

   
<div className="  row d-flex justify-content-center  align-items-center p-1 " > 
<div class="col-auto  ">
    <h3    >Amostra</h3>   
    </div>
    <div class="col-auto  ">
    <input onChangeText={setAmostra}  id='amostra' name='amostra'  placeholder='Digite a amostra'  class="form-control w-90 text-center" ></input>     
    </div>
    <div class="col-auto  ">
    <h3 >-</h3>   
    </div>
    <div class="col-auto  ">
    <input id='amostra1' name='amostra1' onChangeText={setAmostra1}  class="form-control text-center input2 "   ></input>
    </div>
    <div class="col-auto ">
      <button className='button ' onClick={getItem} >
        <img  src="/Images/lupa.jpg" alt="" height='60px'  />
      </button>    
      </div>
      </div>  

      <br/> 

      <body className="  row   justify-content-evenly align-items-center  " > 
      <div class="col-auto ">
<div className="  row  align-items-center p-1 ">
<div class="col-auto">
        <h5>Estufa</h5>
        </div>
        <div class="col-auto">
        <select name="select1" onChangeText={setSelect1}  className='form-control text-center input4'  >
<option value="LAB.001">LAB.001</option>
  <option value="LAB.002" >LAB.002</option>
  <option value="LAB.003">LAB.003</option>
</select>
</div>
</div>
<div className="  row  align-items-center  ">
<div class="col-auto">
        <h5>Balança</h5>
        </div>
        <div class="col-auto">
        <select name="select2" onChangeText={setSelect2}  className='form-control text-center input3 ' >
<option value="LAB.001">LAB.001</option>
  <option value="LAB.002" >LAB.002</option>
  <option value="LAB.003">LAB.003</option>
</select>
</div>
</div>
      </div>
      
      <div class="col-auto">
      <div className="  row  align-items-center p-1 ">
<div class="col-auto">
<h5 >Norma de ensaio</h5>
        </div>
        <div class="col-auto">
        <input name='NormaEnsaio' id='NormaEnsaio' onChangeText={setNormaEnsaio}  className='form-control text-center input3'  ></input> 
</div>
</div>
<div className="  row  align-items-center ">
<div class="col-auto">
<h5 >Laboratório</h5>
        </div>
        <div class="col-auto">
        <input name='laboratorio' id='laboratorio' onChangeText={setLaboratorio}  className='form-control text-center input5'  ></input> 
</div>
</div>
      </div>
      </body>
    
      <hr  size='8' color='gray'  />

      <br/> 
   

   <body className="  col   align-items-center   justify-content-evenly  ">  

   <body  className="  gap-5 row  align-items-center p-1   ">
<div className="  col-5 label  offset-md-4 ">
<h5  >Corpo de prova</h5>
</div>

<div className="  col-auto espaco1   ">
<h5  >I</h5>
</div>
<div className=" col-auto espaco2  ">
<h5 >II</h5>
</div>

</body>


<body  className="  row  align-items-center p-1  ">

<div className="  col-5 label  ">
<h5 name='picnometro' id='picnometro'  >Picnômetro</h5>
</div>
<div className="  col-auto offset-1      ">
    <h5 >n°</h5>
    </div>
    <div className="  col-2  espaco3  ">
    <input name='ipicnometro1' id='ipicnometro1' onChangeText={setIpicnometro1}   className=" form-control text-center input6 "  ></input>
    </div>
    <div className="  col-2  espaco4     ">
    <input name='ipicnometro2' id='ipicnometro2' onChangeText={setIpicnometro2}  className=" form-control text-center input6 " ></input>
    </div>
</body>


<body  className="  row  align-items-center p-1   ">

<div className="  col-5 label   ">
<h5 >Massa úmida do corpo de prova</h5>
</div>
<div className="  col-auto offset-1    ">
<h5  > M¹  </h5>  
</div>
<div className="  col-2 espaco5  ">
<input name='massumdcp1' id='massumdcp1' onChangeText={setMassumdcp1}  className=' form-control text-center input6' ></input>
</div>
<div className="  col-2 espaco6  ">
<input name='massumdcp2' id='massumdcp2' onChangeText={setMassumdcp2}  className='form-control text-center input6' ></input>
</div>
      
</body>


<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Cápsula</h5>
</div>
<div className="  col-auto offset-1 ">
<h5 >n°</h5>
</div>

<div className="  col-2 espaco7   "> 
<div className="  row  align-items-center ">
<div className="  col-4  " >
<input name='capsula1' id='capsula1' onChangeText={setCapsula1}  className='form-control text-center input7' ></input>
</div>
<div className="  col-4  " >
<input name='capsula2' id='capsula2' onChangeText={setCapsula2}  className='form-control  text-center input7'></input>
</div>
<div className="  col-4  ">
<input name='capsula3' id='capsula3' onChangeText={setCapsula3}  className='form-control  text-center input7'></input>
</div>
</div>
</div>

<div className="  col-2  espaco8  "> 
<div className="  row  align-items-center ">
<div className="  col-4  ">
<input name='capsula4' id='capsula4' onChangeText={setCapsula4}  className='form-control  text-center input7'></input>
</div>
<div className="  col-4  ">
<input name='capsula5' id='capsula5' onChangeText={setCapsula5}  className='form-control  text-center input7'></input>
</div>
<div className="  col-4  ">
<input name='capsula6' id='capsula6' onChangeText={setCapsula6}  className=' form-control  text-center input7'></input>
</div>
</div>
</div>
</body>


<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label  ">
<h5 >Massa do solo úmido + cápsula</h5>
</div>

<div className="  col-1  offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto   "> 
<h5  >Mh</h5>
</div> 
<div className="  col-auto  "> 
<h5 >g</h5>
</div>
</div>
</div>

<div className="  col-2  espaco9 "> 
<div className="  row  align-items-center ">
<div className="  col-4  " >
<input name='massolumdEcap1' id='massolumdEcap1' onChangeText={setMassolumdEcap1}  className='form-control  text-center input7' ></input>
</div>
<div className="  col-4  " >
<input name='massolumdEcap2' id='massolumdEcap2' onChangeText={setMassolumdEcap2}  className='form-control text-center  input7'></input>
</div>
<div className="  col-4  ">
<input name='massolumdEcap3' id='massolumdEcap3' onChangeText={setMassolumdEcap3}  className='form-control  text-center input7'></input>
</div>
</div>
</div>

<div className="  col-2  espaco8 "> 
<div className="  row  align-items-center ">
<div className="  col-4  ">
<input name='massolumdEcap4' id='massolumdEcap4' onChangeText={setMassolumdEcap4}  className='form-control text-center  input7'></input>
</div>
<div className="  col-4 ">
<input name='massolumdEcap5' id='massolumdEcap5' onChangeText={setMassolumdEcap5}  className='form-control text-center  input7'></input>
</div>
<div className="  col-4  ">
<input name='massolumdEcap6' id='massolumdEcap6' onChangeText={setMassolumdEcap6}  className='form-control text-center  input7'></input>
</div>
</div>
</div>
</body>


<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Massa do solo seco + cápsula</h5>
</div>
<div className="  col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >Mh</h5>
</div> 
<div className="  col-auto  "> 
<h5 >g</h5>
</div>
</div>
</div>

<div className="  col-2 espaco9  "> 
<div className="  row  align-items-center ">
<div className="  col-4  " >
<input name='massolsecoEcap1' id='massolsecoEcap1' onChangeText={setMassolsecoEcap1}  className='form-control text-center  input7' ></input>
</div>
<div className="  col-4  " >
<input name='massolsecoEcap2' id='massolsecoEcap2' onChangeText={setMassolsecoEcap2}  className='form-control text-center  input7'></input>
</div>
<div className="  col-4 ">
<input name='massolsecoEcap3' id='massolsecoEcap3' onChangeText={setMassolsecoEcap3}  className='form-control text-center  input7'></input>
</div>
</div>
</div>

<div className="  col-2 espaco8  "> 
<div className="  row  align-items-center ">
<div className="  col-4  ">
<input name='massolsecoEcap4' id='massolsecoEcap4' onChangeText={setMassolsecoEcap4}  className='form-control text-center  input7'></input>
</div>
<div className="  col-4  ">
<input name='massolsecoEcap5' id='massolsecoEcap5' onChangeText={setMassolsecoEcap5}  className='form-control text-center  input7'></input>
</div>
<div className="  col-4  ">
<input name='massolsecoEcap6' id='massolsecoEcap6' onChangeText={setMassolsecoEcap6}  className='form-control  text-center input7'></input>
</div>
</div>
</div>
</body>


<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Massa da cápsula</h5>
</div>


<div className="  col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >Mc</h5>
</div> 
<div className="  col-auto  "> 
<h5 >g</h5>
</div>
</div>
</div>


<div className="  col-2  espaco9 "> 
<div className="  row  align-items-center ">
<div className="  col-4  " >
<input name='masscap1' id='masscap1' onChangeText={setMasscap1} onBlur={TeorUmidadeCalc1} className='form-control  text-center input7' ></input>
</div>
<div className="  col-4  " >
<input name='masscap2' id='masscap2' onChangeText={setMasscap2}  onBlur={TeorUmidadeCalc2} className='form-control  text-center input7'></input>
</div>
<div className="  col-4  ">
<input name='masscap3' id='masscap3' onChangeText={setMasscap3}   onBlur={TeorUmidadeCalc3 } className='form-control  text-center input7'></input>
</div>
</div>
</div>

<div className="  col-2  espaco8 "> 
<div className="  row  align-items-center ">
<div className="  col-4  ">
<input name='masscap4' id='masscap4' onChangeText={setMasscap4}  onBlur={TeorUmidadeCalc4} className='form-control  text-center input7'></input>
</div>
<div className="  col-4  ">
<input name='masscap5' id='masscap5' onChangeText={setMasscap5}   onBlur={TeorUmidadeCalc5} className='form-control  text-center input7'></input>
</div>
<div className="  col-4  ">
<input name='masscap6' id='masscap6' onChangeText={setMasscap6}  onBlur={TeorUmidadeCalc6} className='form-control  text-center input7'></input>
</div>
</div>
</div>
</body>


<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Teor de umidade</h5>
</div>


<div className="  col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >h</h5>
</div> 
<div className="  col-auto espaco10 "> 
<h5 >%</h5>
</div>
</div>
</div>


<div className="  col-2 espaco9  "> 
<div className="  row  align-items-center ">
<div className="  col-4  " >
<input name='teorumd1' id='teorumd1' onChangeText={setTeorumd1}   className='form-control  text-center input7' readonly="readonly" ></input>
</div>
<div className="  col-4  " >
<input name='teorumd2' id='teorumd2' onChangeText={setTeorumd2}   className='form-control  text-center input7' readonly="readonly"></input>
</div>
<div className="  col-4  ">
<input name='teorumd3' id='teorumd3' onChangeText={setTeorumd3}   className='form-control  text-center input7' readonly="readonly"></input>
</div>
</div>
</div>

<div className="  col-2 espaco8  "> 
<div className="  row  align-items-center ">
<div className="  col-4  ">
<input name='teorumd4' id='teorumd4' onChangeText={setTeorumd4}   className='form-control  text-center input7' readonly="readonly"></input>
</div>
<div className="  col-4  ">
<input name='teorumd5' id='teorumd5' onChangeText={setTeorumd5}   className='form-control  text-center input7' readonly="readonly"></input>
</div>
<div className="  col-4  ">
<input name='teorumd6' id='teorumd6' onChangeText={setTeorumd6}   className='form-control  text-center input7' readonly="readonly"></input>
</div>
</div>
</div>
</body>


<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Teor de umidade médio</h5>
</div>

<div className="  col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >h</h5>
</div> 
<div className="  col-auto espaco10 "> 
<h5 >%</h5>
</div>
</div>
</div>

<div className="  col-2 espaco11 ">
<input name='teorumdMd1' id='teorumdMd1' onChangeText={setTeorumdMd1}  className='form-control  text-center input6' readonly="readonly" ></input>
</div>
<div className="  col-2 espaco8 ">
<input name='teorumdMd2' id='teorumdMd2' onChangeText={setTeorumdMd2}  className='form-control text-center  input6' readonly="readonly" ></input>
</div>
      
</body>


<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa do picnômetro + água destilada</h5>
</div>

<div className=" col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >M³</h5>
</div> 
<div className="  col-auto  "> 
<h5 >g</h5>
</div>
</div>
</div>

<div className="  col-2 espaco11  ">
<input name='masspicaguadt1' id='masspicaguadt1' onChangeText={setMasspicaguadt1}  className='form-control text-center  input6' ></input>
</div>
<div className="  col-2 espaco8">
<input name='masspicaguadt2' id='masspicaguadt2' onChangeText={setMasspicaguadt2}  className='form-control text-center  input6' ></input>
</div>
      
</body>


<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa do picnômetro + corpo de prova + água até o traço de referência</h5>
</div>

<div className="  col-1 offset-1 ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >M²</h5>
</div> 
<div className="  col-auto  "> 
<h5 >g</h5>
</div>
</div>
</div>

<div className="  col-2 espaco11  ">
<input name='masspicCP1' id='masspicCP1' onChangeText={setMasspicCP1}  className='form-control text-center  input6' ></input>
</div>
<div className="  col-2 espaco8 ">
<input name='masspicCP2' id='masspicCP2' onChangeText={setMasspicCP2}  className='form-control  text-center input6' ></input>
</div>
      
</body>


<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Temperatura do ensaio</h5>
</div>

<div className="  col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >T</h5>
</div> 
<div className="  col-auto espaco10 "> 
<h5 >°</h5>
</div>
</div>
</div>

<div className="  col-2 espaco11 ">
<input name='TempEnsaio1' id='TempEnsaio1' onChangeText={setTempEnsaio1}  className='form-control text-center  input6' ></input>
</div>
<div className="  col-2 espaco8 ">
<input name='TempEnsaio2' id='TempEnsaio2' onChangeText={setTempEnsaio2}  className='form-control text-center  input6' ></input>
</div>
      
</body>


    <body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa específica da água a temperatura T do ensaio</h5>
</div>

<div className="  col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto "> 
<h5 >dT</h5>
</div> 
<div className="  col-auto "> 
<h5 >g/cm³</h5>
</div>
</div>
</div>

<div className="  col-2 espaco11  ">
<input name='MassEspAgaTempT1' id='MassEspAgaTempT1' onChangeText={setMassEspAgaTempT1}  onBlur={MassaEspCPCalc1} className='form-control text-center  input6' ></input>
</div>
<div className="  col-2 espaco8 ">
<input name='MassEspAgaTempT2' id='MassEspAgaTempT2' onChangeText={setMassEspAgaTempT2}  onBlur={MassaEspCPCalc2} className='form-control text-center  input6' ></input>
</div>
      
</body>

    <body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa específica do corpo de prova</h5>
</div>

<div className="  col-1 offset-1 ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto "> 
<h5 >dT</h5>
</div> 
<div className="  col-auto  "> 
<h5 >g/cm³</h5>
</div>
</div>
</div>

<div className="  col-2 espaco11 ">
<input name='massaespcppv1' id='massaespcppv1' onChangeText={setMassaespcppv1}  onBlur={CalcularMassaEspMDCalc} className='form-control text-center  input6' readonly="readonly" ></input>
</div>
<div className="  col-2 espaco8 ">
<input name='massaespcppv2' id='massaespcppv2' onChangeText={setMassaespcppv2}  onBlur={CalcularMassaEspMDCalc && TeorUmidadeCalc1 &&
TeorUmidadeCalc2 &&
TeorUmidadeCalc3 &&
TeorUmidadeCalc4 &&
TeorUmidadeCalc5 &&
TeorUmidadeCalc6 &&
TeorUmdMediaCalc1 &&
TeorUmdMediaCalc2 &&
MassaEspCPCalc1 &&
MassaEspCPCalc2 } className='form-control  text-center input6' readonly="readonly" ></input>
</div>
      
</body>


<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa específica média</h5>
</div>

<div className="  col-1 offset-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-auto  "> 
<h5 >dT</h5>
</div> 
<div className="  col-auto "> 
<h5 >g/cm³</h5>
</div>
</div>
</div>

<div className="  col-3 espaco11  ">
<input name='massaespMd' id='massaespMd' onChangeText={setMassaespMd}  className='form-control text-center  input8' readonly="readonly" ></input>
</div>

      
</body>
 </body>


 <br/>
 <br/>
 <br/>
 <br/>

 <body className="  row   justify-content-evenly  " > 

<div className="  col-4    ">
  <h5 className="  label  " >Observações</h5>
<textarea cols={100} rows={6} className='form-control w-200' name='obs' id='obs' onChangeText={setObs}  ></textarea>
</div>

<div className="  col-auto  espaco12   ">

<div className="  row  align-items-center  ">

  <div className="  col-auto  ">

  <button  type='submit' className='button' >
        <img  src="/Images/imprimir.png" alt="" height='100px' className='button1' />
      </button>
  </div>
  <div className="  col-auto  ">
  <button  type='submit' className='button' >
        <img  src="/Images/document.png" alt="" height='75px' className='button1' />
      </button>

</div>
<div className="  col-auto  ">

<button  type='submit' className='button' >
        <img  src="/Images/salvarverde.png" alt="" height='75px' className='button1' onClick={add} />
      </button>
</div>

</div>

</div>


 </body>

     
 </div>
</form>

<br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>   
</body>



}



             

 
export default MassaEspRealEmGraos;