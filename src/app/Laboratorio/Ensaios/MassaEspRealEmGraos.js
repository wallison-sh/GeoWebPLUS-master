import React from 'react';
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import  './MassaEspRealGraos.css';



//CÁLCULOS
function TeorUmidadeCalc1 (){

  var v1 = document.querySelector("#massolumdEcap1");
  var v2 = document.querySelector("#massolsecoEcap1");
  var v3 = document.querySelector("#masscap1");
  var v4 = document.querySelector("#teorumd1");
  var v11 =  v1.value;
  var v22 = v2.value;
  var v33 =  v3.value;
  var resul1 = (parseInt(v11) - parseInt(v22)) ;
  var resul2 = (parseInt(v22) - parseInt(v33)) ;
  var resul = (parseInt(resul1)/parseInt(resul2))*100
  
  v4.value = resul.toFixed(2);
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
    var resul1 = (parseInt(v11) - parseInt(v22)) ;
    var resul2 = (parseInt(v22) - parseInt(v33)) ;
    var resul = (parseInt(resul1)/parseInt(resul2))*100
    
    v4.value = resul.toFixed(2);
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
      var resul1 = (parseInt(v11) - parseInt(v22)) ;
      var resul2 = (parseInt(v22) - parseInt(v33)) ;
      var resul = (parseInt(resul1)/parseInt(resul2))*100
      
      v4.value = resul.toFixed(2);
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
        var resul1 = (parseInt(v11) - parseInt(v22)) ;
        var resul2 = (parseInt(v22) - parseInt(v33)) ;
        var resul = (parseInt(resul1)/parseInt(resul2))*100
        
        v4.value = resul.toFixed(2);
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
          var resul1 = (parseInt(v11) - parseInt(v22)) ;
          var resul2 = (parseInt(v22) - parseInt(v33)) ;
          var resul = (parseInt(resul1)/parseInt(resul2))*100
          
          v4.value = resul.toFixed(2);
          console.log(resul);
          }
          function TeorUmidadeCalc6 (){

            var v1 = document.querySelector("#massolumdEcap6");
            var v2 = document.querySelector("#massolsecoEcap6");
            var v3 = document.querySelector("#masscap6");
            var v4 = document.querySelector("#teorumd6");
            var v11 =  v1.value;
            var v22 = v2.value;
            var v33 =  v3.value;
            var resul1 = (parseInt(v11) - parseInt(v22)) ;
            var resul2 = (parseInt(v22) - parseInt(v33)) ;
            var resul = (parseInt(resul1)/parseInt(resul2))*100
            
            v4.value = resul.toFixed(2);
            console.log(resul);
            }

            function TeorUmidadeMdCalc1 (){

              var v1 = document.querySelector("#teorumd1");
              var v2 = document.querySelector("#teorumd2");
              var v3 = document.querySelector("#teorumd3");
              var v4 = document.querySelector("#teorumdMd1");

              var v11 =  v1.value;
              var v22 = v2.value;
              var v33 =  v3.value;
            
              var resul = (parseInt(v11)+parseInt(v22)+parseInt(v33))/3
              
              v4.value = resul.toFixed(2);
              console.log(resul);
              }

              function TeorUmidadeMdCalc2 (){

                var v1 = document.querySelector("#teorumd4");
                var v2 = document.querySelector("#teorumd5");
                var v3 = document.querySelector("#teorumd6");
                var v4 = document.querySelector("#teorumdMd2");
  
                var v11 =  v1.value;
                var v22 = v2.value;
                var v33 =  v3.value;               
                var resul = (parseInt(v11)+parseInt(v22)+parseInt(v33))/3
                
                v4.value = resul.toFixed(2);
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

    var resul1 = (parseInt(a1) + parseInt(a2)) 
    var resul = parseInt(resul1) /2 

    aaa.value = resul.toFixed(2);
    
    console.log(resul);
   }

function MassaEspRealEmGraos (){
return <body className='tudo' >
    
    <Navbar />
    <div className='titulolaboratorio' >
      <h1 className='texttitulo'>Massa específica real em grãos</h1>     
      <br/>   
      
    </div>
    
<div className='div' >
    <h3 >Amostra</h3>  
    <input id='amostra' name='amostra'  placeholder='Digite a amostra' className='input1'  ></input>     
      <button  className='button' >
        <img  src="/Images/lupa.jpg" alt="" height='60px' className='button1' />
      </button>
      </div>  

<div className='div1'>
<div className='div2'>

  <div className='div3'>
    <h5   >Estufa</h5>      
<select name="select" className='input2' >
<option value="LAB.001">LAB.001</option>
  <option value="LAB.002" selected>LAB.002</option>
  <option value="LAB.003">LAB.003</option>
</select>
</div>

<div className='div3'>
    <h5 >Balança</h5>     
    <select name="select" className='input3' >
    <option value="LAB.001">LAB.001</option>
  <option value="LAB.002" selected>LAB.002</option>
  <option value="LAB.003">LAB.003</option>
</select>
</div>

</div>

<div className='div2'>
<div className='div3'>
    <h5 >Norma de ensaio</h5>
    <input className='input4' ></input>   
    </div>

    <div className='div3'>
    <h5 >Laboratório</h5>
    <input className='input5' ></input>   
    </div>
    </div>
   
    </div>

<hr  size='8' color='gray'  />


<div className='div1'>
<div className='div2'>
<div className='div3'>
    <h5 >Corpo de prova</h5>
    <h5 className='espaco' >I</h5>
    <h5 className='espaco1'>II</h5>
</div>

<div className='div3'>
    <h5 name='picnometro' id='picnometro' >Picnômetro</h5>
    <h5 className='espaco3'>n°</h5>
    <input name='ipicnometro1' id='ipicnometro1' className='input6'  ></input>
    <input name='ipicnometro2' id='ipicnometro2' className='input7' ></input>
 </div>

 <div className='div3'>
    <h5 >Massa úmida do corpo de prova</h5>
    <h5 className='espaco4' > M¹  </h5>  
    <input name='massumdcp1' id='massumdcp1' className='input8' ></input>
    <input name='massumdcp2' id='massumdcp2' className='input9' ></input>
</div>

<div className='div3'>
    <h5 >Cápsula</h5>
    <h5 className='espaco5'>n°</h5>
    <input name='capsula1' id='capsula1' className='input10' ></input>
    <input name='capsula2' id='capsula2' className='input11'></input>
    <input name='capsula3' id='capsula3' className='input11'></input>
    <input name='capsula4' id='capsula4' className='input15'></input>
    <input name='capsula5' id='capsula5' className='input11'></input>
    <input name='capsula6' id='capsula6' className='input11'></input>
  </div>

  <div className='div3'>
    <h5  >Massa do solo úmido + cápsula</h5>
    <h5 className='espaco7'>Mh</h5>
    <h5 className='espaco6'>g</h5>
    <input name='massolumdEcap1' id='massolumdEcap1' className='input12' ></input>
    <input name='massolumdEcap2' id='massolumdEcap2' className='input13'></input>
    <input name='massolumdEcap3' id='massolumdEcap3' className='input13'></input>
    <input name='massolumdEcap4' id='massolumdEcap4' className='input15'></input>
    <input name='massolumdEcap5' id='massolumdEcap5' className='input13'></input>
    <input name='massolumdEcap6' id='massolumdEcap6' className='input13'></input>
</div>
  
<div className='div3'>
    <h5 >Massa do solo seco + cápsula</h5>
    <h5 className='espaco8'>Ms</h5>
    <h5 className='espaco6'>g</h5>
    <input name='massolsecoEcap1' id='massolsecoEcap1' className='input14' ></input>
    <input name='massolsecoEcap2' id='massolsecoEcap2' className='input13'></input>
    <input name='massolsecoEcap3' id='massolsecoEcap3' className='input13'></input>
    <input name='massolsecoEcap4' id='massolsecoEcap4' className='input15'></input>
    <input name='massolsecoEcap5' id='massolsecoEcap5' className='input13'></input>
    <input name='massolsecoEcap6' id='massolsecoEcap6' className='input13'></input>
</div>
  
<div className='div3'>
    <h5 >Massa da cápsula</h5>
    <h5 className='espaco9'>Mc</h5>
    <h5 className='espaco6'>g</h5>
    <input name='masscap1' id='masscap1'  onBlur={TeorUmidadeCalc1} className='input14'readonly="readonly"></input>
    <input name='masscap2' id='masscap2'  onBlur={TeorUmidadeCalc2} className='input13'readonly="readonly"></input>
    <input name='masscap3' id='masscap3'  onBlur={TeorUmidadeCalc3 }  className='input13'readonly="readonly"></input>
    <input name='masscap4' id='masscap4'  onBlur={TeorUmidadeCalc4} className='input15'readonly="readonly"></input>
    <input name='masscap5' id='masscap5'  onBlur={TeorUmidadeCalc5} className='input13'readonly="readonly"></input>
    <input name='masscap6' id='masscap6'  onBlur={TeorUmidadeCalc6} className='input13'readonly="readonly"></input>
</div>
 
<div className='div3'>
    <h5 >Teor de umidade</h5>
    <h5 className='espaco10'>h</h5>
    <h5 className='espaco11'>%</h5>
    <input name='teorumd1' id='teorumd1' className='input16' readonly="readonly"></input>
    <input name='teorumd2' id='teorumd2' className='input13' readonly="readonly"></input>
    <input name='teorumd3' id='teorumd3' onBlur={TeorUmidadeMdCalc1} className='input13'readonly="readonly"></input>
    <input name='teorumd4' id='teorumd4' className='input15' readonly="readonly"></input>
    <input name='teorumd5' id='teorumd5' className='input13' readonly="readonly"></input>
    <input name='teorumd6' id='teorumd6' onBlur={TeorUmidadeMdCalc2}  className='input13' readonly="readonly"></input>
  </div>

  <div className='div3'>
    <h5 >Teor de umidade médio</h5>
    <h5 className='espaco12'>h</h5>
    <h5 className='espaco11'>%</h5>
    <input name='teorumdMd1' id='teorumdMd1' className='input17' readonly="readonly" ></input>
    <input name='teorumdMd2' id='teorumdMd2' className='input9' readonly="readonly"></input>
   </div>
 
   <div className='div3'>
    <h5 >Massa do picnômetro + água destilada</h5>
    <h5 className='espaco13'>M³</h5>
    <h5 className='espaco14'>g</h5>
    <input name='masspicaguadt1' id='masspicaguadt1' className='input18' readonly="readonly"></input>
    <input name='masspicaguadt2' id='masspicaguadt2' className='input9' readonly="readonly"></input>
  </div>
  
  <div className='div3'>
    <h5 >Massa do picnômetro + corpo de prova  {"\n"} + água até o traço de referência</h5>
    <h5 className='espaco15'>M²</h5>
    <h5 className='espaco14'>g</h5>
    <input name='masspicCP1' id='masspicCP1' className='input18'></input>
    <input name='masspicCP2' id='masspicCP2' className='input9'></input>
  </div>
  
  <div className='div3'>
    <h5 >Temperatura do ensaio</h5>
    <h5 className='espaco16'>T</h5>
    <h5 className='espaco11'>°</h5>
    <input name='TempEnsaio1' id='TempEnsaio1' className='input21'></input>
    <input name='TempEnsaio2' id='TempEnsaio2' className='input9'></input>
  </div>
  
  <div className='div3'>
    <h5 >Massa específica da água a temperatura T do ensaio</h5>
    <h5 className='espaco17'>dT</h5>
    <h5 className='espaco14'>g/cm³</h5>
    <input name='MassEspAgaTempT1' id='MassEspAgaTempT1' className='input19' onBlur={MassaEspCPCalc1}  readonly="readonly"></input>
    <input name='MassEspAgaTempT2' id='MassEspAgaTempT2'  className='input9' onBlur={MassaEspCPCalc2}  readonly="readonly"></input>
    </div>
 
    <div className='div3'>
    <h5  >Massa específica do corpo de prova</h5>
    <h5 className='espaco18'>dT</h5>
    <h5 className='espaco14'>g/cm³</h5>
    <input name='massaespcppv1' id='massaespcppv1' className='input19' onBlur={MassaEspMDCalc} readonly="readonly"></input>
    <input name='massaespcppv2' id='massaespcppv2' className='input9' onBlur={MassaEspMDCalc} readonly="readonly"></input>
   </div>
 
   <div className='div3'>
    <h5 >Massa específica média</h5>
    <h5 className='espaco19'>dT</h5>
    <h5 className='espaco14'>g/cm³</h5>
    <input name='massaespMd' id='massaespMd' className='input20' readonly="readonly"></input>  
 </div>
 
 </div>
 </div>

<div className='div4'>

<div className='div2'>
  <h5 > Observações</h5>
  <input className='input22' name='obs' id='obs' ></input>
  </div>

<div className='div5'>
<button  type='submit' className='button2' >
        <img  src="/Images/imprimir.png" alt="" height='100px' className='button4' />
      </button>
      <button  type='submit' className='button3' >
        <img  src="/Images/document.png" alt="" height='75px' className='button4' />
      </button>
      <button  type='submit' className='button3' >
        <img  src="/Images/salvarverde.png" alt="" height='75px' className='button4' />
      </button>
      </div> 
      </div>   

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