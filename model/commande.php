<?php
require "../controller/config.php";

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;



class Commande
{
    public function ajouterCommande($data)
    {
        $connect = Config::getConnexion();
        $sql = "INSERT INTO commande (email_client, date, nom_client, prenom_client , status) VALUES (?, ?, ?, ? , ?)";
        $request = $connect->prepare($sql);
    
        $date = new DateTime($data['date']);
        $time = new DateTime($data['temps']);
    
        // Convert the date and time inputs to strings
        $date_str = $date->format('Y-m-d');
        $time_str = $time->format('H:i:s');
    
        // Combine the date and time strings into a single datetime value
        $datetime_str = $date_str . ' ' . $time_str;
    
        // Create a DateTime object for the combined datetime value
        $datetime = new DateTime($datetime_str);
    
        // Output the combined datetime string
        echo $datetime->format('Y-m-d H:i:s');
    
        $request->execute([$data["email"], $datetime->format('Y-m-d H:i:s'), $data["nom"], $data["prenom"] , "en attente"]);
    }
    public function mail($id){
        $connect = Config::getConnexion();
        $sql = "select * from commande where id = ?";
        $request = $connect->prepare($sql);
        $request->execute([$id]);
        $tableau_de_commande=$request->fetchAll();
        
        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;   // Enable verbose debug output
        $mail->isSMTP();                        // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';         // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                 // Enable SMTP authentication
        $mail->Username = 'patisserie1charlotte@gmail.com';// SMTP username
        $mail->Password = 'brfusaxlmcctzygz';       // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                      // TCP port to connect to

        //Recipients
        $mail->setFrom('patisserie1charlotte@gmail.com' , 'charlotte');
        echo $tableau_de_commande[0]["email_client"];
        $mail->addAddress($tableau_de_commande[0]["email_client"]);     // Add a recipient

        //Content
        $mail->isHTML(true);                    // Set email format to HTML
        $mail->Subject = 'Commande en cours ne pas repondre';
        $mail->Body    = 'Bonjour '.$tableau_de_commande[0]["nom_client"].' '.$tableau_de_commande[0]["prenom_client"].',<br>Votre commande est finalisee.
        <br>S il vous plait soyez au rendez-vous :'.$tableau_de_commande[0]["date"];


        $mail->send();
        echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

    }
    public function afficher_les_commandes(){
        $connect = Config::getConnexion();
        $sql = "select * from commande";
        $request = $connect->prepare($sql);
        $request->execute();
        $tableau_de_commande=$request->fetchAll();
        foreach ($tableau_de_commande as $row){
            echo ("<tr>
            <td>" . $row['id'] . "</td>
            <td>" . $row['email_client'] . "</td>
            <td>" . $row['date'] . "</td>
            <td>" . $row['nom_client'] . "</td>
            <td>" . $row['prenom_client'] . "</td>
            <td>". $row['status']."</td>");
            switch($row['status']){
                case "en attente":
                    echo ("<td><a href='../controller/modifier.php?accepter=". $row["id"] ." 'class='button-link'>accepter</a>
                    <a href='../controller/modifier.php?rejeter=". $row["id"] ." 'class='button-link'>rejeter</a></td>");
                    break;
                case "accepté" || "rejeté":
                    echo ("<td><a href='../controller/supprimer.php?supprimer=". $row["id"] ." 'class='button-link'>supprimer</a></td>");
                    break;
            }
            
        }
        echo "<tr>";
    }

    public function modifier($id){
        $connect = Config::getConnexion();
        $sql = "UPDATE commande SET status ='accepté' WHERE id = ?;";
        $request = $connect->prepare($sql);
        $request->execute([$id]);
    }

    public function supprimer($id){
        $connect = Config::getConnexion();
        $sql = "DELETE FROM commande WHERE id = ?";
        $request = $connect->prepare($sql);
        $request->execute([$id]);
    }

}
?>