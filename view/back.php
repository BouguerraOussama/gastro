<?php
require "../model/commande.php";
$commande = new Commande();
?>
<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestion des commandes</title>
  <link rel="shortcut icon" type="image/x-icon" href="images/icon.png" />
  <link rel="stylesheet" href="./css/back.css">
  <script src="https://kit.fontawesome.com/a94050807a.js" crossorigin="anonymous"></script>
</head>

<body>
  <div class="header">
    <i class="logo fa-solid fa-cake-candles"></i>
    <h1>Gestion de commande</h1>
    <p>coordonner efficacement le processus de traitement des commandes</p>
  </div>
 
  <table class="content-table">
    <thead>
      <tr>
        <th>id</th>
        <th>Email du client</th>
        <th>Date et temps de reception</th>
        <th>Nom du client</th>
        <th>Prenom du client</th>
        <th>Status de la commande</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <?php
        $commande->afficher_les_commandes();
      ?>
      
    </tbody>
  </table>
</body>

</html>