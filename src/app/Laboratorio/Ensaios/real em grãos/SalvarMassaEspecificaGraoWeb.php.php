<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 $query = $pdo->prepare("UPDATE MassaEspecificaRealEmGraos SET Capsula1 = :capsula1,Capsula2 = :capsula2,Capsula3 = :capsula3, Capsula4 = :capsula4, Capsula5 = :capsula5, Capsula6 = :capsula6, massaDoSoloUmdCaps1 = :massolumdEcap1, massaDoSoloUmdCaps2 = :massolumdEcap2, massaDoSoloUmdCaps3 = :massolumdEcap3, massaDoSoloUmdCaps4 = :massolumdEcap4, massaDoSoloUmdCaps5 = :massolumdEcap5, massaDoSoloUmdCaps6 = :massolumdEcap6, massaDoSoloSecCaps1 = :massolsecoEcap1, massaDoSoloSecCaps2 = :massolsecoEcap2, massaDoSoloSecCaps3 = :massolsecoEcap3, massaDoSoloSecCaps4 = :massolsecoEcap4, massaDoSoloSecCaps5 = :massolsecoEcap5, massaDoSoloSecCaps6 = :massolsecoEcap6,  massaUmidaDoCorpoDeProva1 = :massumdcp1, massaUmidaDoCorpoDeProva2 = :massumdcp2, massaPicCorpoProva1 = :masspicCP1, massaPicCorpoProva2 = :masspicCP2, temperaturaDoEnsaio1 = :TempEnsaio1, temperaturaDoEnsaio2 = :TempEnsaio2, Norma = :normaEnsaio, PICNOMETRO1 = :ipicnometro1, PICNOMETRO2 = :ipicnometro2, Processo = :processo, balanca ='select1',Estufa = 'select2', MassaCaps1 = '',MassaCaps2 = '',MassaCaps3 = '',MassaCaps4 = '',MassaCaps5 = '',MassaCaps6 = '', teorDeUmd1 =  '', teorDeUmd2 =  '', teorDeUmd3 =  '', teorDeUmd4 =  '', teorDeUmd5 =  '', teorDeUmd6 =  '',teorDeUmdMedio1 = '',teorDeUmdMedio2 = '', massaPicAgDestilada1 = '', massaPicAgDestilada2 = '', massaEspDaAguaATempT1 = '', massaEspDaAguaATempT2 = '', massaEspCorpoProva1 = '', massaEspCorpoProva2 = '', massaEspMEDIA = '',Operador_RealGrao = 'Mobile', Laboratorio = 'Brasil', Observacao = 'obs', StatusEnsaio = '', Datainicio ='', Datafim = '' WHERE Amostra = :amostra ");
  
       $query->bindValue(":amostra", $postjson['amostra']);
       $query->bindValue(":caspsula1", $postjson['capsula1']);
       $query->bindValue(":caspsula2", $postjson['capsula2']);
       $query->bindValue(":caspsula3", $postjson['capsula3']);
       $query->bindValue(":caspsula4", $postjson['capsula4']);
       $query->bindValue(":caspsula5", $postjson['capsula5']);
       $query->bindValue(":caspsula6", $postjson['capsula6']);
       $query->bindValue(":masamoumicap1", $postjson['massolumdEcap1']);    
       $query->bindValue(":masamoumicap2", $postjson['massolumdEcap2']);
       $query->bindValue(":masamoumicap3", $postjson['massolumdEcap3']);
       $query->bindValue(":masamoumicap4", $postjson['massolumdEcap4']);
       $query->bindValue(":masamoumicap5", $postjson['massolumdEcap5']);
       $query->bindValue(":masamoumicap6", $postjson['massolumdEcap6']);
       $query->bindValue(":masamosecacap1", $postjson['massolsecoEcap1']);    
       $query->bindValue(":masamosecacap2", $postjson['massolsecoEcap2']);
       $query->bindValue(":masamosecacap3", $postjson['massolsecoEcap3']);
       $query->bindValue(":masamosecacap4", $postjson['massolsecoEcap4']);
       $query->bindValue(":masamosecacap5", $postjson['massolsecoEcap5']);
       $query->bindValue(":masamosecacap6", $postjson['massolsecoEcap6']);
       $query->bindValue(":massaUmidaDoCorpoDeProva1", $postjson['massumdcp1']);
       $query->bindValue(":massaUmidaDoCorpoDeProva2", $postjson['massumdcp2']);
       $query->bindValue(":massaPicCorpoProva1", $postjson['masspicCP1']);
       $query->bindValue(":massaPicCorpoProva2", $postjson['masspicCP2']);
       $query->bindValue(":temperaturaDoEnsaio1", $postjson['TempEnsaio1']); 
       $query->bindValue(":temperaturaDoEnsaio2", $postjson['TempEnsaio2']);
       $query->bindValue(":PICNOMETRO1", $postjson['ipicnometro1']);
       $query->bindValue(":PICNOMETRO2", $postjson['ipicnometro2']);
       $query->bindValue(":processo", $postjson['processo']);
       $query->bindValue(":norma", $postjson['norma']);
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }
     echo $result;

    



     

 
     
    
     



    
    
   

   
  
  