import React from 'react';
import Navbar from './NavbarLaboratorio/navbarlaboratorio';
import  './MassaEspRealGraos.css';
import '../imageensaio/lupa.jpg';



function MassaEspRealEmGraos (){
return <div>
   
  

    <Navbar />
    <div className='titulolaboratorio' >
      <h1 className='texttitulo'>Massa específica real em grãos</h1>
      <br/>   
      <br/>     
    </div>

    <div className='ladoaladoecentral' >
    <h3 className='topo'>Amostra</h3>  
    <input className='ipamt' placeholder='Digite a amostra' size="12"  ></input>
       
<div>
      <a  href="3">
        <img className='esquerda2' src="/Images/lupa.jpg" alt="" height='60px' />
      </a>
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

<hr size='8' color='gray'/>




<body className='body2'>

  <div className='ladoalado'>
    <h5 className='esquerda'>Corpo de prova</h5>
    <h5 className='iqqq'>I</h5>
    <h5 className='ijjj'>II</h5>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Picnômetro</h5>
    <h5 className= 'margem3'>n°</h5>
    <input name='ipicnometro1' id='ipicnometro1' className='isss' size='41' ></input>
    <input id="ipicnometro2" className='margem8' size='41'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa úmida do corpo de prova</h5>
    <h5 className= 'ittt'> M¹  </h5>  
    <input className='ibbb' size='41'></input>
    <input className='margem8' size='41'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Cápsula</h5>
    <h5 className='ifff'>n°</h5>
    <input className='iuuu' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='margem8' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do solo úmido + cápsula</h5>
    <h5 className='iddd'>Mh</h5>
    <h5 className='esquerda'>g</h5>
    <input className='immm' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='margem8' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do solo seco + cápsula</h5>
    <h5 className='ijjj'>Ms</h5>
    <h5 className='esquerda'>g</h5>
    <input className='ihhh' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='margem8' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa da cápsula</h5>
    <h5 className='iooo'>Mc</h5>
    <h5 className='esquerda'>g</h5>
    <input className='immm' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='margem8' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Teor de umidade</h5>
    <h5 className='ippp'>h</h5>
    <h5 className='esquerda'>%</h5>
    <input className='ikkk' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='margem8' size='9'></input>
    <input className='esquerda' size='9'></input>
    <input className='esquerda' size='9'></input>
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Teor de umidade médio</h5>
    <h5 className='iespmds'>h</h5>
    <h5 className='esquerda'>%</h5>
    <input className='ikkk' size='41'></input>
    <input className='margem8' size='41'></input>
   
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do picnômetro + água destilada</h5>
    <h5 className='iggg'>M³</h5>
    <h5 className='esquerda'>g</h5>
    <input className='immm' size='41'></input>
    <input className='margem8' size='41'></input>
  
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa do picnômetro + corpo de prova  {"\n"} + água até o traço de referência</h5>
    <h5 className='margem12'>M²</h5>
    <h5 className='esquerda'>g</h5>
    <input className='immm' size='41'></input>
    <input className='margem8' size='41'></input>
  
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Temperatura do ensaio</h5>
    <h5 className='margem4'>T</h5>
    <h5 className='esquerda'>°</h5>
    <input className='iccc' size='41'></input>
    <input className='margem8' size='41'></input>
  
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa específica da água a temperatura T do ensaio</h5>
    <h5 className='itempt'>dT</h5>
    <h5 className='esquerda'>g/cm³</h5>
    <input className='margem12' size='41'></input>
    <input className='margem8' size='41'></input>
    
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa específica do corpo de prova</h5>
    <h5 className='iespcp'>dT</h5>
    <h5 className='esquerda'>g/cm³</h5>
    <input className='margem12' size='41'></input>
    <input className='margem8' size='41'></input>
   
  </div>

  <div className='ladoalado'>
    <h5 className='esquerda'>Massa específica média</h5>
    <h5 className='iespmds'>dT</h5>
    <h5 className='esquerda'>g/cm³</h5>
    <input className='margem12' size='101'></input>  
  </div>
</body>

<body className='body3'>
<div >
  <h5 className='esquerda'> Observações</h5>
  <input className='iobs' size='60'></input>
</div>

<div className='divbtn'>
<a  href="3">
        <img className='esquerda2' src="/Images/imprimir.png" alt="" height='100px' />
      </a>
      <a  href="3">
        <img className='esquerda3' src="/Images/salvarverde.png" alt="" height='75px' />
      </a>
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


  
export default MassaEspRealEmGraos;