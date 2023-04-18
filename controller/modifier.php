<?php
require "../model/commande.php";
$commande = new Commande();
$commande->modifier($_GET["accepter"]);
$commande->mail($_GET["accepter"]);
header('location:../view/back.php');
?>