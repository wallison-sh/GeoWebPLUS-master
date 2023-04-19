<?php

include_once('conexao.php');

$amostra = $_GET['amostra'];

$query = $pdo->query("SELECT * from MassaEspecificaRealEmGraos where Amostra = '$amostra'");

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i = 0; $i < count($res); $i++) {
    foreach ($res[$i] as $key => $value) {
    }

    $amostra = $res[$i]['Amostra'];
    $processo = $res[$i]['Processo'];
    $norma = $res[$i]['Norma'];
    $Capsula1 = $res[$i]['Capsula1'];
    $Capsula2 = $res[$i]['Capsula2'];
    $Capsula3 = $res[$i]['Capsula3'];
    $Capsula4 = $res[$i]['Capsula4'];
    $Capsula5 = $res[$i]['Capsula5'];
    $Capsula6 = $res[$i]['Capsula6'];
    $masamoumicap1 = $res[$i]['massaDoSoloUmdCaps1'];
    $masamoumicap2 = $res[$i]['massaDoSoloUmdCaps2'];
    $masamoumicap3 = $res[$i]['massaDoSoloUmdCaps3'];
    $masamoumicap4 = $res[$i]['massaDoSoloUmdCaps4'];
    $masamoumicap5 = $res[$i]['massaDoSoloUmdCaps5'];
    $masamoumicap6 = $res[$i]['massaDoSoloUmdCaps6'];
    $masamosecacap1 = $res[$i]['massaDoSoloSecCaps1'];
    $masamosecacap2 = $res[$i]['massaDoSoloSecCaps2'];
    $masamosecacap3 = $res[$i]['massaDoSoloSecCaps3'];
    $masamosecacap4 = $res[$i]['massaDoSoloSecCaps4'];
    $masamosecacap5 = $res[$i]['massaDoSoloSecCaps5'];
    $masamosecacap6 = $res[$i]['massaDoSoloSecCaps6'];
    $massaumidacorpoprova1 = $res[$i]['massaUmidaDoCorpoDeProva1']; //
    $massaumidacorpoprova2 = $res[$i]['massaUmidaDoCorpoDeProva2'];
    $massapicnometrocorpoaguatraco1 = $res[$i]['massaPicCorpoProva1'];
    $massapicnometrocorpoaguatraco2 = $res[$i]['massaPicCorpoProva2'];
    $temperaturaensaio1 = $res[$i]['temperaturaDoEnsaio1'];
    $temperaturaensaio2 = $res[$i]['temperaturaDoEnsaio2']; //
    $picnometro1 = $res[$i]['PICNOMETRO1'];
    $picnometro2 = $res[$i]['PICNOMETRO2'];
    $obs = $res[$i]['Observacao'];
}

if (count($res) > 0) {
    $result = json_encode(array('success' => true, 'processo' => $processo, 'amostra' => $amostra, 'NormaEnsaio' => $norma ,'capsula1' => $Capsula1, 'capsula2' => $Capsula2, 'capsula3' => $Capsula3, 'capsula4' => $Capsula4, 'capsula5' => $Capsula5, 'capsula6' => $Capsula6, 'massolumdEcap1' => $masamoumicap1, 'massolumdEcap2' => $masamoumicap2, 'massolumdEcap3' => $masamoumicap3, 'massolumdEcap4' => $masamoumicap4, 'massolumdEcap5' => $masamoumicap5, 'massolumdEcap' => $masamoumicap6, 'massolsecoEcap1' => $masamosecacap1, 'massolsecoEcap2' => $masamosecacap2, 'massolsecoEcap3' => $masamosecacap3, 'massolsecoEcap4' => $masamosecacap4, 'massolsecoEcap5' => $masamosecacap5, 'massolsecoEcap6' => $masamosecacap6, ' massumdcp1' => $massaumidacorpoprova1, 'massumdcp2' => $massaumidacorpoprova2,  'masspicCP1' => $massapicnometrocorpoaguatraco1, 'masspicCP2' => $massapicnometrocorpoaguatraco2, 'TempEnsaio1' => $temperaturaensaio1, 'TempEnsaio2' => $temperaturaensaio2,  'ipicnometro1' => $picnometro1, 'ipicnometro2' => $picnometro2,'obs' => $obs));
} else {
    $result = json_encode(array('success' => false, 'result' => '0'));
}
echo $result;
