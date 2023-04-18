<?php
require "../model/commande.php";
$commande = new Commande();
$commande->ajouterCommande($_GET);
header('location:../view/index.html');
?>