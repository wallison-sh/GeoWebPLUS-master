
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import  './MassaEspRealGraos.css';
import React from "react";





function Teste (){



  // looping de calculo
                
  /* var aa91 = document.querySelector("#massaespcppv1");
  var aa92 = document.querySelector("#massaespcppv2");
  var aaa = document.querySelector("#massaespMd"); */

  //var a1 = aa91.value;
  //var a2 = aa92.value; 



//   function calcularMd (){
// if (  aa91 === "" && aa92 === ""   ){
//     aaa.value = ""}

//     else if (aa91 !== "" && aa92 !== "" ){MassaEspMDCalc()}
//     else if (aa91 !== "" && aa92 === "" ){MassaEspMDCalcA()}


// }





  //CÁLCULOS

   // massa especifica média

/*      function MassaEspMDCalc () {

    var aa91 = document.querySelector("#massaespcppv1");
    var aa92 = document.querySelector("#massaespcppv2");
    var aaa = document.querySelector("#massaespMd");

    var a1 = aa91.value;
    var a2 = aa92.value; 

    var resul1 = (parseFloat(a1) + parseFloat(a2)) 
    var resul = parseFloat(resul1) /2 

    aaa.value = resul.toFixed(2);
    
   }

   function MassaEspMDCalcA () {

    var aa91 = document.querySelector("#massaespcppv1");
    //var aa92 = document.querySelector("#massaespcppv2");
    var aaa = document.querySelector("#massaespMd");

    var a1 = aa91.value;
    //var a2 = aa92.value; 

    var resul = parseFloat(a1) /1

    aaa.value = resul.toFixed(2); 
   }

 */


   function CalcularMassaEspMDCalc() { 

    var aa91 = document.querySelector("#massaespcppv1");
    var aa92 = document.querySelector("#massaespcppv2");
    var aaa = document.querySelector("#massaespMd");

    var a1  = aa91.value;
    var a2 = aa92.value; 
    
    

    
   if (a1!=="" && a2!==""  ){ 
    var resul1 = (parseFloat(a1) + parseFloat(a2)) ;
    var resul = Number.parseFloat(resul1) /2  ;
    aaa.value = parseFloat(resul.toFixed(1));

    console.log( resul.toFixed(1))
   }

   else if (a1!=="" && a2==="" ) {   
   
    var resul2 = parseFloat(a1) /1 ;
    aaa.value = resul2.toFixed(1);
  }

  else if (a1==="" && a2!=="" ) {   
   
    var resul3 = parseFloat(a2) /1 ;
    aaa.value = resul3.toFixed(1);
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
  
      </div>
      </div>  

      <br/> 

      <body className="  row   justify-content-evenly align-items-center  " > 
      <div class="col-auto ">
<div className="  row  align-items-center p-1 ">

       
</div>
<div className="  row  align-items-center  ">

</div>
      </div>
      
      <div class="col-auto">
      <div className="  row  align-items-center p-1 ">

</div>
<div className="  row  align-items-center ">

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
<input name='massaespcppv1' id='massaespcppv1' className='form-control text-center  input6' onBlur={CalcularMassaEspMDCalc} ></input>
</div>
<div className="  col-2 espaco8 ">
<input name='massaespcppv2' id='massaespcppv2'  className='form-control  text-center input6' onBlur={CalcularMassaEspMDCalc} ></input>
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
<input name='massaespMd' id='massaespMd'   className='form-control text-center  input8' readonly="readonly" ></input>
</div>

      
</body>
 </body>


 <br/>
 <br/>
 <br/>
 <br/>



     
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



             

 
export default Teste;