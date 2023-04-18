<?php
require "../model/commande.php";
$commande = new Commande();
$commande->supprimer($_GET["supprimer"]);
header('location:../view/back.php');
?>