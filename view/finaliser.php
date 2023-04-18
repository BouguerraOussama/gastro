<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Commande</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/icon.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/finaliser.css">
    <script src="https://kit.fontawesome.com/a94050807a.js" crossorigin="anonymous"></script>
  </head>
  <body>

    <header>
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l12" style="text-align:center; color:white;">
          <a href="./index.html" ><i class="logo fa-solid fa-cake-candles"></i> 
          </a>
          <h1>Finaliser votre commande</h1>
          <p>Veuillez remplir les informations ci-dessous</p>
        </div>
      </div>
      <div class="row" id="blanc">
        <div class="col l12 m12 s12" id="rectangle">
          <form method="GET" action="../controller/ajouter.php">
            <!-- Champ prénom !-->

            <div class="input-field col s6">
            <label for="prenom">Prénom</label>
            <input class="validate" name="prenom" type="text" value="" id="prenom" placeholder="François" required>
            </div>

            <!-- Champ nom !-->

            <div class="input-field col s6">
            <label for="nom">Nom de famille</label>
            <input class="validate" type="text" value="" name="nom" id="nom" placeholder="Pignon" required text-capitalize>
            </div>

            <!-- Champ date de reception de commande !-->
            <div class="input-field col s12">
            <label for="date">Date de reception de commande</label>
            <input type="text" class="datepicker" name="date" placeholder="20/05/2023" class="validate" required>
            </div>
          
             <!-- Champ temps de reception de commande !-->
             <div class="input-field col s12">
            <label for="temps">Temps de reception de commande</label>
            <input type="time" class="datepicker" name="temps" placeholder="00:00" class="validate" required>
            </div>
    
            <!-- Champ email !-->

            <div class="input-field col s12">
            <label for="email">Email</label>
            <input class="validate" type="email" value="" name="email" id="p1" placeholder="lediner@decon.fr" required>
            <input class="validate" type='email' placeholder="lediner@decon.fr" onfocus="validateMail(document.getElementById('p1'), this);" oninput="validateMail(document.getElementById('p1'), this);" required>
            </div>

            <!-- Champ CGV !-->

            <div class="input-field col s12">
              <p>
                <label>
                  <input class="with-gap" name="group1" type="radio" required/>
                  <span>J'accepte les conditions d'utilisations.</span>
                </label>
              </p>
            </div>

            <!-- Bouton envoyer !-->

            <div class="input-field col s12">
            <button class="btn waves-effect waves-light pulse" type="submit" name="action">Valider
            <i class="material-icons right">send</i>
            </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  </header>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script type="text/javascript" src="js.js">
    </script>
  </body>
</html>
<!-- partial -->
  <script  src="js/finaliser.js"></script>

</body>
</html>
