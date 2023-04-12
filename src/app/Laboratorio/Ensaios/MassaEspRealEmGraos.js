
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import  './MassaEspRealGraos.css';
import React from 'react';

function MassaEspRealEmGraos (){

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

            function TeorUmidadeMdCalc1 (){

              var v1 = document.querySelector("#teorumd1");
              var v2 = document.querySelector("#teorumd2");
              var v3 = document.querySelector("#teorumd3");
              var v4 = document.querySelector("#teorumdMd1");

              var v11 =  v1.value;
              var v22 =  v2.value;
              var v33 =  v3.value;
            
              var resul = (parseFloat(v11)+parseFloat(v22)+parseFloat(v33))/3
              
              v4.value = resul.toFixed(1);
              console.log(resul);
              }

              function TeorUmidadeMdCalc2 (){

                var v1 = document.querySelector("#teorumd4");
                var v2 = document.querySelector("#teorumd5");
                var v3 = document.querySelector("#teorumd6");
                var v4 = document.querySelector("#teorumdMd2");
  
                var v11 =  v1.value;
                var v22 =  v2.value;
                var v33 =  v3.value;               
                var resul = (parseFloat(v11)+parseFloat(v22)+parseFloat(v33))/3
                
                v4.value = resul.toFixed(1);
                console.log(resul);
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

   function MassaEspMDCalc () {

    var aa91 = document.querySelector("#massaespcppv1");
    var aa92 = document.querySelector("#massaespcppv2");
    var aaa = document.querySelector("#massaespMd");

    var a1 = aa91.value;
    var a2 = aa92.value; 

    var resul1 = (parseFloat(a1) + parseFloat(a2)) 
    var resul = parseFloat(resul1) /2 

    aaa.value = resul.toFixed(2);
    
    console.log(resul);
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
    <h3  >Amostra</h3>   
    </div>
    <div class="col-auto">
    <input type="number"  id='amostra' name='amostra'  placeholder='Digite a amostra'  className='input1 ' ></input>     
    </div>
    <div class="col-auto">
    <h3 >-</h3>   
    </div>
    <div class="col-auto">
    <input id='amostra1' name='amostra1' type="number" className='input2 '   ></input>
    </div>
    <div class="col-auto">
      <button className='button '  >
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
        <select name="select1" className='input4'  >
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
        <select name="select2" className='input3' >
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
        <input className='input3'  ></input> 
</div>
</div>
<div className="  row  align-items-center ">
<div class="col-auto">
<h5 >Laboratório</h5>
        </div>
        <div class="col-auto">
        <input className='input5'  ></input> 
</div>
</div>
      </div>
      </body>
    
      <hr  size='8' color='gray'  />

      <br/> 


   <body className="  col  align-items-center   justify-content-evenly  ">

   <body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5  >Corpo de prova</h5>
</div>
<div className="  col-5   ">
<h5  >I</h5>
</div>
<div className=" col-1   ">
<h5 >II</h5>
</div>
</body>

<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 name='picnometro' id='picnometro'  >Picnômetro</h5>
</div>
<div className="  col-1  ">
    <h5 >n°</h5>
    </div>
    <div className="  col-3  ">
    <input name='ipicnometro1' id='ipicnometro1' type="number" className="   input6 "  ></input>
    </div>
    <div className="  col-2 ">
    <input name='ipicnometro2' id='ipicnometro2' type="number" className="   input6 " ></input>
    </div>
</body>



<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa úmida do corpo de prova</h5>
</div>
<div className="  col-1  ">
<h5  > M¹  </h5>  
</div>
<div className="  col-3  ">
<input name='massumdcp1' id='massumdcp1' type="number" className='input6' ></input>
</div>
<div className="  col-2  ">
<input name='massumdcp2' id='massumdcp2' type="number" className='input6' ></input>
</div>
      
</body>


<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Cápsula</h5>
</div>
<div className="  col-1  ">
<h5 >n°</h5>
</div>

<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  " >
<input name='capsula1' id='capsula1' type="number" className='input7' ></input>
</div>
<div className="  col-3  " >
<input name='capsula2' id='capsula2'type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='capsula3' id='capsula3' type="number" className='input7'></input>
</div>
</div>
</div>

<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  ">
<input name='capsula4' id='capsula4' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='capsula5' id='capsula5' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='capsula6' id='capsula6' type="number" className='input7'></input>
</div>
</div>
</div>
</body>


<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Massa do solo úmido + cápsula</h5>
</div>


<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9   "> 
<h5  >Mh</h5>
</div> 
<div className="  col-3  "> 
<h5 >g</h5>
</div>
</div>
</div>


<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  " >
<input name='massolumdEcap1' id='massolumdEcap1' type="number" className='input7' ></input>
</div>
<div className="  col-3  " >
<input name='massolumdEcap2' id='massolumdEcap2' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='massolumdEcap3' id='massolumdEcap3' type="number" className='input7'></input>
</div>
</div>
</div>

<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  ">
<input name='massolumdEcap4' id='massolumdEcap4' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='massolumdEcap5' id='massolumdEcap5' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='massolumdEcap6' id='massolumdEcap6' type="number" className='input7'></input>
</div>
</div>
</div>
</body>



<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Massa do solo seco + cápsula</h5>
</div>
<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >Mh</h5>
</div> 
<div className="  col-3  "> 
<h5 >g</h5>
</div>
</div>
</div>

<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  " >
<input name='massolsecoEcap1' id='massolsecoEcap1' type="number" className='input7' ></input>
</div>
<div className="  col-3  " >
<input name='massolsecoEcap2' id='massolsecoEcap2' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='massolsecoEcap3' id='massolsecoEcap3' type="number" className='input7'></input>
</div>
</div>
</div>

<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  ">
<input name='massolsecoEcap4' id='massolsecoEcap4' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='massolsecoEcap5' id='massolsecoEcap5' type="number" className='input7'></input>
</div>
<div className="  col-3  ">
<input name='massolsecoEcap6' id='massolsecoEcap6' type="number" className='input7'></input>
</div>
</div>
</div>
</body>



<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Massa da cápsula</h5>
</div>


<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >Mc</h5>
</div> 
<div className="  col-3  "> 
<h5 >g</h5>
</div>
</div>
</div>


<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  " >
<input name='masscap1' id='masscap1' type="number" onBlur={TeorUmidadeCalc1} className='input7' ></input>
</div>
<div className="  col-3  " >
<input name='masscap2' id='masscap2' type="number" onBlur={TeorUmidadeCalc2} className='input7'></input>
</div>
<div className="  col-3  ">
<input name='masscap3' id='masscap3' type="number"  onBlur={TeorUmidadeCalc3 } className='input7'></input>
</div>
</div>
</div>

<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  ">
<input name='masscap4' id='masscap4' type="number" onBlur={TeorUmidadeCalc4} className='input7'></input>
</div>
<div className="  col-3  ">
<input name='masscap5' id='masscap5' type="number"  onBlur={TeorUmidadeCalc5} className='input7'></input>
</div>
<div className="  col-3  ">
<input name='masscap6' id='masscap6' type="number" onBlur={TeorUmidadeCalc6} className='input7'></input>
</div>
</div>
</div>
</body>





<body  className="  row  align-items-center p-1 ">
<div className="  col-5 label ">
<h5 >Teor de umidade</h5>
</div>


<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >h</h5>
</div> 
<div className="  col-3  "> 
<h5 >%</h5>
</div>
</div>
</div>


<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  " >
<input name='teorumd1' id='teorumd1' type="number" onBlur={TeorUmidadeMdCalc1} className='input7' ></input>
</div>
<div className="  col-3  " >
<input name='teorumd2' id='teorumd2' type="number" onBlur={TeorUmidadeMdCalc1} className='input7'></input>
</div>
<div className="  col-3  ">
<input name='teorumd3' id='teorumd3' type="number" onBlur={TeorUmidadeMdCalc1} className='input7'></input>
</div>
</div>
</div>

<div className="  col-2   "> 
<div className="  row  align-items-center ">
<div className="  col-3  ">
<input name='teorumd4' id='teorumd4' type="number" onBlur={TeorUmidadeMdCalc2} className='input7'></input>
</div>
<div className="  col-3  ">
<input name='teorumd5' id='teorumd5' type="number" onBlur={TeorUmidadeMdCalc2} className='input7'></input>
</div>
<div className="  col-3  ">
<input name='teorumd6' id='teorumd6' type="number" onBlur={TeorUmidadeMdCalc2} className='input7'></input>
</div>
</div>
</div>
</body>







<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Teor de umidade médio</h5>
</div>

<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >h</h5>
</div> 
<div className="  col-3  "> 
<h5 >%</h5>
</div>
</div>
</div>

<div className="  col-3  ">
<input name='teorumdMd1' id='teorumdMd1' type="number" className='input6' ></input>
</div>
<div className="  col-2  ">
<input name='teorumdMd2' id='teorumdMd2' type="number" className='input6' ></input>
</div>
      
</body>



<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa do picnômetro + água destilada</h5>
</div>

<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >M³</h5>
</div> 
<div className="  col-3  "> 
<h5 >g</h5>
</div>
</div>
</div>

<div className="  col-3  ">
<input name='masspicaguadt1' id='masspicaguadt1' type="number" className='input6' ></input>
</div>
<div className="  col-2  ">
<input name='masspicaguadt2' id='masspicaguadt2' type="number" className='input6' ></input>
</div>
      
</body>





<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa do picnômetro + corpo de prova + água até o traço de referência</h5>
</div>

<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >M²</h5>
</div> 
<div className="  col-3  "> 
<h5 >g</h5>
</div>
</div>
</div>

<div className="  col-3  ">
<input name='masspicCP1' id='masspicCP1' type="number" className='input6' ></input>
</div>
<div className="  col-2  ">
<input name='masspicCP2' id='masspicCP2' type="number" className='input6' ></input>
</div>
      
</body>


<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Temperatura do ensaio</h5>
</div>

<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >T</h5>
</div> 
<div className="  col-3  "> 
<h5 >°</h5>
</div>
</div>
</div>

<div className="  col-3  ">
<input name='TempEnsaio1' id='TempEnsaio1' type="number" className='input6' ></input>
</div>
<div className="  col-2  ">
<input name='TempEnsaio2' id='TempEnsaio2' type="number" className='input6' ></input>
</div>
      
</body>






    <body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa específica da água a temperatura T do ensaio</h5>
</div>

<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >dT</h5>
</div> 
<div className="  col-3  "> 
<h5 >g/cm³</h5>
</div>
</div>
</div>

<div className="  col-3  ">
<input name='MassEspAgaTempT1' id='MassEspAgaTempT1' type="number" onBlur={MassaEspCPCalc1} className='input6' ></input>
</div>
<div className="  col-2  ">
<input name='MassEspAgaTempT2' id='MassEspAgaTempT2' type="number" onBlur={MassaEspCPCalc2} className='input6' ></input>
</div>
      
</body>






    <body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa específica do corpo de prova</h5>
</div>

<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >dT</h5>
</div> 
<div className="  col-3  "> 
<h5 >g/cm³</h5>
</div>
</div>
</div>

<div className="  col-3  ">
<input name='massaespcppv1' id='massaespcppv1' type="number" onBlur={MassaEspMDCalc} className='input6' ></input>
</div>
<div className="  col-2  ">
<input name='massaespcppv2' id='massaespcppv2' type="number" onBlur={MassaEspMDCalc} className='input6' ></input>
</div>
      
</body>





<body  className="  row  align-items-center p-1">
<div className="  col-5 label ">
<h5 >Massa específica média</h5>
</div>

<div className="  col-1  ">
  <div className="  row  align-items-center  ">
  <div className="  col-9  "> 
<h5 >dT</h5>
</div> 
<div className="  col-3  "> 
<h5 >g/cm³</h5>
</div>
</div>
</div>

<div className="  col-5  ">
<input name='massaespMd' id='massaespMd' type="number" className='input8' ></input>
</div>

      
</body>
 </body>
    
 <br/>
 <br/>
 <br/>
 <br/>

 <body className="  row   justify-content-evenly align-items-center  " > 

<div className="  col-6  ">
<input className='input9' name='obs' id='obs' ></input>
</div>

<div className="  col-6  ">

<div className="  row  align-items-center  ">

  <div className="  col-3  ">

  <button  type='submit' className='button' >
        <img  src="/Images/imprimir.png" alt="" height='100px' className='button1' />
      </button>
  </div>
  <div className="  col-3  ">
  <button  type='submit' className='button' >
        <img  src="/Images/document.png" alt="" height='75px' className='button1' />
      </button>

</div>
<div className="  col-3  ">

<button  type='submit' className='button' >
        <img  src="/Images/salvarverde.png" alt="" height='75px' className='button1' />
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