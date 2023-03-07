import React from 'react';
import Navbar from './NavbarLaboratorio/navbarlaboratorio';
import  './MassaEspRealGraos.css';
import '../imageensaio/lupa.jpg';




function MassaEspRealEmGraos (){
return <div className="tudo">
   

   
    <Navbar />
    <div className='titulolaboratorio' >
      <h1 className='texttitulo'>Massa específica real em grãos</h1>
     
      <br/>   
      <br/>     
    </div>

<div className='ladoaladoecentral'>
    <div className='ladoaladoecentral' >
    <h3 className='topo'>Amostra</h3>  
    <input id='amostra' name='amostra' className='inputamt' placeholder='Digite a amostra'   ></input>
    </div>   
<div>
      <button   className='btnsBC' >
        <img  src="/Images/lupa.jpg" alt="" height='60px' />
      </button>
      </div>
      </div>    
    


<body className='body1'>

<div className='div1'>
<div className='ladoalado'>
    <h5 className='topo2'  >Estufa</h5>
    
   
<select name="select" className='inputestufa'>
<option value="LAB.001">LAB.001</option>
  <option value="LAB.002" selected>LAB.002</option>
  <option value="LAB.003">LAB.003</option>
</select>
</div>



<div className='ladoalado'>
    <h5 className='topo2'>Balança</h5>
      

    <select name="select" className='inputbalanca' >
    <option value="LAB.001">LAB.001</option>
  <option value="LAB.002" selected>LAB.002</option>
  <option value="LAB.003">LAB.003</option>
</select>
</div>
</div>


<div className='div1'>
<div className='ladoalado'>
    <h5 className='topo2'>Norma de ensaio</h5>
    <input className='normaensaio'size="20"></input>   
</div>

<div className='ladoalado'>
    <h5 className='topo2'>Laboratório</h5>
    <input className='laboratorio'size="20"></input>   
</div>
</div>
</body>

<br/>

<hr className='margem9' size='8' color='gray'  />




<body className='body2'>

  

  <div className='ladoalado'>
    <h5 className='esquerda'>Corpo de prova</h5>
    <h5 className='irrr'>I</h5>
    <h5 className='ieee'>II</h5>
  </div>

  <div className='ladoalado'>
    <h5 name='picnometro' id='picnometro' className='esquerda'>Picnômetro</h5>
    <h5 className= 'margem3'>n°</h5>
    <input name='ipicnometro1' id='ipicnometro1'  className='isss' size='29' ></input>
    <input name='ipicnometro2' id='ipicnometro2'  className='izzz' size='29'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa úmida do corpo de prova</h5>
    <h5 className= 'ittt'> M¹  </h5>  
    <input name='massumdcp1' id='massespumd1' className='ibbb' size='29'></input>
    <input name='massumdcp2' id='massumdcp2' className='izzz' size='29'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Cápsula</h5>
    <h5 className='ifff'>n°</h5>
    <input name='capsula1' id='capsula1' className='iuuu' size='5'></input>
    <input name='capsula2' id='capsula2' className='esquerda' size='5'></input>
    <input name='capsula3' id='capsula3' className='esquerda' size='5'></input>
    <input name='capsula4' id='capsula4' className='izzz' size='5'></input>
    <input name='capsula5' id='capsula5' className='esquerda' size='5'></input>
    <input name='capsula6' id='capsula6' className='esquerda' size='5'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do solo úmido + cápsula</h5>
    <h5 className='iddd'>Mh</h5>
    <h5 className='esquerda'>g</h5>

    <input name='massolumdEcap1' id='massolumdEcap1' className='immm' size='5'></input>
    <input name='massolumdEcap2' id='massolumdEcap2' className='esquerda' size='5'></input>
    <input name='massolumdEcap3' id='massolumdEcap3' className='esquerda' size='5'></input>
    <input name='massolumdEcap4' id='massolumdEcap4' className='izzz' size='5'></input>
    <input name='massolumdEcap5' id='massolumdEcap5' className='esquerda' size='5'></input>
    <input name='massolumdEcap6' id='massolumdEcap6' className='esquerda' size='5'></input>

  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do solo seco + cápsula</h5>
    <h5 className='ijjj'>Ms</h5>
    <h5 className='esquerda'>g</h5>

    <input name='massolsecoEcap1' id='massolsecoEcap1' className='ihhh' size='5'></input>
    <input name='massolsecoEcap2' id='massolsecoEcap2' className='esquerda' size='5'></input>
    <input name='massolsecoEcap3' id='massolsecoEcap3' className='esquerda' size='5'></input>
    <input name='massolsecoEcap4' id='massolsecoEcap4' className='izzz' size='5'></input>
    <input name='massolsecoEcap5' id='massolsecoEcap5' className='esquerda' size='5'></input>
    <input name='massolsecoEcap6' id='massolsecoEcap6' className='esquerda' size='5'></input>

  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa da cápsula</h5>
    <h5 className='iooo'>Mc</h5>
    <h5 className='esquerda'>g</h5>

    <input name='masscap1' id='masscap1' className='immm' onBlur={TeorUmidadeCalc1} size='5'></input>
    <input name='masscap2' id='masscap2' className='esquerda' onBlur={TeorUmidadeCalc2} size='5'></input>
    <input name='masscap3' id='masscap3' className='esquerda' onBlur={TeorUmidadeCalc3 }  size='5'></input>
    <input name='masscap4' id='masscap4' className='izzz' onBlur={TeorUmidadeCalc4} size='5'></input>
    <input name='masscap5' id='masscap5' className='esquerda' onBlur={TeorUmidadeCalc5} size='5'></input>
    <input name='masscap6' id='masscap6' className='esquerda' onBlur={TeorUmidadeCalc6} size='5'></input>

  </div>

  <div  className='ladoalado'>
    <h5 className='esquerda'>Teor de umidade</h5>
    <h5 className='ippp'>h</h5>
    <h5 className='esquerda'>%</h5>

    <input name='teorumd1' id='teorumd1' className='ikkk' size='5'></input>
    <input name='teorumd2' id='teorumd2' className='esquerda' size='5'></input>
    <input name='teorumd3' id='teorumd3' onBlur={TeorUmidadeMdCalc1} className='esquerda' size='5'></input>
    <input name='teorumd4' id='teorumd4' className='izzz' size='5'></input>
    <input name='teorumd5' id='teorumd5' className='esquerda' size='5'></input>
    <input name='teorumd6' id='teorumd6' onBlur={TeorUmidadeMdCalc2}  className='esquerda' size='5'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Teor de umidade médio</h5>
    <h5 className='iespmds'>h</h5>
    <h5 className='esquerda'>%</h5>

    <input name='teorumdMd1' id='teorumdMd1' className='ikkk' size='29'></input>
    <input name='teorumdMd2' id='teorumdMd2' className='izzz' size='29'></input>
   
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do picnômetro + água destilada</h5>
    <h5 className='iggg'>M³</h5>
    <h5 className='esquerda'>g</h5>

    <input name='masspicaguadt1' id='masspicaguadt1' className='immm' size='29'></input>
    <input name='masspicaguadt2' id='masspicaguadt2' className='izzz' size='29'></input>
  
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do picnômetro + corpo de prova  {"\n"} + água até o traço de referência</h5>
    <h5 className='margem12'>M²</h5>
    <h5 className='esquerda'>g</h5>

    <input name='masspicCP1' id='masspicCP1' className='immm' size='29'></input>
    <input name='masspicCP2' id='masspicCP2' className='izzz' size='29'></input>
  
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Temperatura do ensaio</h5>
    <h5 className='margem4'>T</h5>
    <h5 className='esquerda'>°</h5>

    <input name='TempEnsaio1' id='TempEnsaio1' className='iccc' size='29'></input>
    <input name='TempEnsaio2' id='TempEnsaio2' className='izzz' size='29'></input>
  
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa específica da água a temperatura T do ensaio</h5>
    <h5 className='itempt'>dT</h5>
    <h5 className='esquerda'>g/cm³</h5>

    <input name='MassEspAgaTempT1' id='MassEspAgaTempT1'  className='margem12' size='29'></input>
    <input name='MassEspAgaTempT2' id='MassEspAgaTempT2'  className='izzz' size='29'></input>
    
  </div>

  <div className='ladoalado'>
    <h5  className='esquerda'>Massa específica do corpo de prova</h5>
    <h5 className='iespcp'>dT</h5>
    <h5 className='esquerda'>g/cm³</h5>

    <input name='massaespcppv1' id='massaespcppv1'  className='margem12' size='29'></input>

    <input name='massaespcppv2' id='massaespcppv2'  className='izzz' size='29'></input>
   
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa específica média</h5>
    <h5 className='iespmds'>dT</h5>
    <h5 className='esquerda'>g/cm³</h5>

    <input name='massaespMd' id='massaespMd' className='margem12' size='70'></input>  
  </div>
 
</body>


<body className='body3'>
<div >
  <h5 className='esquerda'> Observações</h5>

  <input name='obs' id='obs' className='iobs' size='60'></input>
</div>

<div className='divbtn'>
<button  type='submit' className='btnsIP' >
        <img  src="/Images/imprimir.png" alt="" height='100px' />
      </button>
      <button  type='submit' className='btnsSV' >
        <img  src="/Images/salvarverde.png" alt="" height='75px' />
      </button>
</div>
</body>


<div>
    <br/>

    <br/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

</div>
</div>

}

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
  
  v4.value = resul;
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
    
    v4.value = resul;
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
      
      v4.value = resul;
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
        
        v4.value = resul;
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
          
          v4.value = resul;
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
            
            v4.value = resul;
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
              
              v4.value = resul;
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
                
                v4.value = resul;
                console.log(resul);
                }


            
                  
                  
        

          

             

 
export default MassaEspRealEmGraos;