let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    cart.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    cnteredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let searchBtn = document.querySelector('.searchBtn');
let closeBtn= document.querySelector('.closeBtn');
let searchBox= document.querySelector('.searchBox');
let search=document.getElementById("chercher");
searchBtn.onclick = function(){
    // afficher la barre de recherche
    searchBox.classList.add("active");
    searchBox.classList.remove("unactive");
    // afficher bouton x 
    closeBtn.classList.add('active');
    //enlever la loupe
    searchBtn.classList.add('active');
    // enlever la navbar 
    navbar.classList.remove('active');
    //reset icone
    menu.classList.remove('fa-times');
}

closeBtn.onclick = function(){
    //revenir sur la partie que t'Ã©tait sur
    history.back();
    //ne plus afficher la barre de recherche
    searchBox.classList.remove("active");
    searchBox.classList.add("unactive");
    // cacher bouton x 
    closeBtn.classList.remove('active');
    //afficher la loupe
    searchBtn.classList.remove('active');
    searchBtn.classList.add('unactive');
    search.value="";
}

let button_next=document.querySelector('.swiper-button-next');

setInterval(() => {
    button_next.click();
  }, 3000);


// CATEGORIES
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".option-container");
const optionsList = document.querySelectorAll(".option");

// cakes
const cakes_name=["Marbré","Blondies","Brownies","Cannelés","Cupcake citron myrtille","cupcakes au chocolat"];
// gateaux
const gateaux_name=["Entremets chocolat caramel","Entremets noisettes","Fromboisier","Millefeuille Opéra","Opéra"];
// viennoiseries
const viennoiseries_name=["Croissants","Croissants avec confiture","viennoiserie à la figue"];
//tartes
const tartes_name=["cookies","éclair passion framboise","paris brest"];

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
          for(var i=0;i<cakes_name.length;i++)
        {    let cake=document.getElementById("cake"+(i+1));
             cake.style.display="";
        }
        for(var i=0;i<gateaux_name.length;i++)
        {   let gateau=document.getElementById("gateau"+(i+1));
            gateau.style.display='none';
        }
        for(var i=0;i<viennoiseries_name.length;i++)
        {
             let vin=document.getElementById("vin"+(i+1));
             vin.style.display='none';
        }
        for(var i=0;i<tartes_name.length;i++)
        {
            let tarte=document.getElementById("tarte"+(i+1));
            tarte.style.display='none';
        }
optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").textContent;
    optionsContainer.classList.remove("active");
    switch(selected.textContent)
    {
        case "cakes":
            {
                for(var i=0;i<cakes_name.length;i++)
                {    let cake=document.getElementById("cake"+(i+1));
                     cake.style.display="";
                }
                for(var i=0;i<gateaux_name.length;i++)
                {   let gateau=document.getElementById("gateau"+(i+1));
                    gateau.style.display='none';
                }
                for(var i=0;i<viennoiseries_name.length;i++)
                {
                     let vin=document.getElementById("vin"+(i+1));
                     vin.style.display='none';
                }
                for(var i=0;i<tartes_name.length;i++)
                {
                    let tarte=document.getElementById("tarte"+(i+1));
                    tarte.style.display='none';
                }
                break;
            }
        case "gateaux":
            {
                for(var i=0;i<cakes_name.length;i++)
                {    let cake=document.getElementById("cake"+(i+1));
                     cake.style.display="none";
                }
                for(var i=0;i<gateaux_name.length;i++)
                {   let gateau=document.getElementById("gateau"+(i+1));
                    gateau.style.display='';
                }
                for(var i=0;i<viennoiseries_name.length;i++)
                {
                     let vin=document.getElementById("vin"+(i+1));
                     vin.style.display='none';
                }
                for(var i=0;i<tartes_name.length;i++)
                {
                    let tarte=document.getElementById("tarte"+(i+1));
                    tarte.style.display='none';
                }
                break;
            }
            case "viennoiseries":
                {
                    for(var i=0;i<cakes_name.length;i++)
                    {    let cake=document.getElementById("cake"+(i+1));
                         cake.style.display="none";
                    }
                    for(var i=0;i<gateaux_name.length;i++)
                    {   let gateau=document.getElementById("gateau"+(i+1));
                        gateau.style.display='none';
                    }
                    for(var i=0;i<viennoiseries_name.length;i++)
                    {
                         let vin=document.getElementById("vin"+(i+1));
                         vin.style.display='';
                    }
                    for(var i=0;i<tartes_name.length;i++)
                    {
                        let tarte=document.getElementById("tarte"+(i+1));
                        tarte.style.display='none';
                    }
                    break;
                }
                case "tartes":
                {for(var i=0;i<cakes_name.length;i++)
                    {    let cake=document.getElementById("cake"+(i+1));
                         cake.style.display="none";
                    }
                    for(var i=0;i<gateaux_name.length;i++)
                    {   let gateau=document.getElementById("gateau"+(i+1));
                        gateau.style.display='none';
                    }
                    for(var i=0;i<viennoiseries_name.length;i++)
                    {
                         let vin=document.getElementById("vin"+(i+1));
                         vin.style.display='none';
                    }
                    for(var i=0;i<tartes_name.length;i++)
                    {
                        let tarte=document.getElementById("tarte"+(i+1));
                        tarte.style.display='';
                    }
                    break;
                }    
    }
  });
});

// END CATEGORIES

// PANIER
for(var i=0;i<cakes_name.length;i++)
document.getElementById("cake"+(i+1)+"_cart").style.display="none";
for(var i=0;i<gateaux_name.length;i++)
document.getElementById("gateau"+(i+1)+"_cart").style.display="none";
for(var i=0;i<viennoiseries_name.length;i++)
document.getElementById("vin"+(i+1)+"_cart").style.display="none";
for(var i=0;i<tartes_name.length;i++)
document.getElementById("tarte"+(i+1)+"_cart").style.display="none";
document.getElementById("finaliserbtn").style.display="none";
let cake_1=document.getElementById("cake_1").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("cake1_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("cake1_price").innerHTML+=document.getElementById("cake1_quantite").value;
});

let cake_2=document.getElementById("cake_2").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("cake2_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("cake2_price").innerHTML+=document.getElementById("cake2_quantite").value;
});
let cake_3=document.getElementById("cake_3").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("cake3_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("cake3_price").innerHTML+=document.getElementById("cake3_quantite").value;
});
let cake_4=document.getElementById("cake_4").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("cake4_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("cake4_price").innerHTML+=document.getElementById("cake4_quantite").value;
});
let cake_5=document.getElementById("cake_5").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("cake5_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("cake5_price").innerHTML+=document.getElementById("cake5_quantite").value;
});
let cake_6=document.getElementById("cake_6").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("cake6_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("cake6_price").innerHTML+=document.getElementById("cake6_quantite").value;
});
let gateau_1=document.getElementById("gateau_1").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("gateau1_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("gateau1_price").innerHTML+=document.getElementById("gateau1_quantite").value;
});
let gateau_2=document.getElementById("gateau_2").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("gateau2_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("gateau2_price").innerHTML+=document.getElementById("gateau2_quantite").value;
});
let gateau_3=document.getElementById("gateau_3").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("gateau3_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("gateau3_price").innerHTML+=document.getElementById("gateau3_quantite").value;
});
let gateau_4=document.getElementById("gateau_4").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("gateau4_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("gateau4_price").innerHTML+=document.getElementById("gateau4_quantite").value;
});
let gateau_5=document.getElementById("gateau_5").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("gateau5_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("gateau5_price").innerHTML+=document.getElementById("gateau5_quantite").value;
});
let vin_1=document.getElementById("vin_1").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("vin1_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("vin1_price").innerHTML+=document.getElementById("vin1_quantite").value;
});
let vin_2=document.getElementById("vin_2").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("vin2_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("vin2_price").innerHTML+=document.getElementById("vin2_quantite").value;
});
let vin_3=document.getElementById("vin_3").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("vin3_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("vin3_price").innerHTML+=document.getElementById("vin3_quantite").value;
});
let tarte_1=document.getElementById("tarte_1").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("tarte1_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("tarte1_price").innerHTML+=document.getElementById("tarte1_quantite").value;
});
let tarte_2=document.getElementById("tarte_2").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("tarte2_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("tarte2_price").innerHTML+=document.getElementById("tarte2_quantite").value;
});
let tarte_3=document.getElementById("tarte_3").addEventListener("click",() =>
{   document.querySelector(".title").innerHTML="passer À la caisse";
    document.getElementById("tarte3_cart").style.display="";
    document.getElementById("finaliserbtn").style.display="";
    document.getElementById("tarte3_price").innerHTML+=document.getElementById("tarte3_quantite").value;
});

document.getElementById("cake1_x").addEventListener("click",() => {
document.getElementById("cake1_cart").style.display="none";
cal_display_none();
});
document.getElementById("cake2_x").addEventListener("click",() => {
    document.getElementById("cake2_cart").style.display="none";
    cal_display_none();
    });
    document.getElementById("cake3_x").addEventListener("click",() => {
        document.getElementById("cake3_cart").style.display="none";
        cal_display_none();
        });
        document.getElementById("cake4_x").addEventListener("click",() => {
            document.getElementById("cake4_cart").style.display="none";
            cal_display_none();
            });
            document.getElementById("cake5_x").addEventListener("click",() => {
                document.getElementById("cake5_cart").style.display="none";
                cal_display_none();
                });
                document.getElementById("cake6_x").addEventListener("click",() => {
                    document.getElementById("cake6_cart").style.display="none";
                    cal_display_none();
                    });

document.getElementById("gateau1_x").addEventListener("click",() => {
document.getElementById("gateau1_cart").style.display="none";
cal_display_none();
});
document.getElementById("gateau2_x").addEventListener("click",() => {
    document.getElementById("gateau2_cart").style.display="none";
    cal_display_none();
    });
    document.getElementById("gateau3_x").addEventListener("click",() => {
        document.getElementById("gateau3_cart").style.display="none";
        cal_display_none();
        });
        document.getElementById("gateau4_x").addEventListener("click",() => {
            document.getElementById("gateau4_cart").style.display="none";
            cal_display_none();
            });
            document.getElementById("gateau5_x").addEventListener("click",() => {
                document.getElementById("gateau5_cart").style.display="none";
                cal_display_none();
                });

document.getElementById("vin1_x").addEventListener("click",() => {
document.getElementById("vin1_cart").style.display="none";
cal_display_none();
});
document.getElementById("vin2_x").addEventListener("click",() => {
    document.getElementById("vin2_cart").style.display="none";
    cal_display_none();
    });
    document.getElementById("vin3_x").addEventListener("click",() => {
        document.getElementById("vin3_cart").style.display="none";
        cal_display_none();
        });

document.getElementById("tarte1_x").addEventListener("click",() => {
document.getElementById("tarte1_cart").style.display="none";
cal_display_none();
});
document.getElementById("tarte2_x").addEventListener("click",() => {
    document.getElementById("tarte2_cart").style.display="none";
    cal_display_none();
    });
    document.getElementById("tarte3_x").addEventListener("click",() => {
        document.getElementById("tarte3_cart").style.display="none";
        cal_display_none();
        });
function cal_display_none()
{       var cake_cart_none=0;
        var gateau_cart_none=0;
        var vin_cart_none=0;
        var tarte_cart_none=0;
        for(var i=0;i<cakes_name.length;i++)
        if(document.getElementById("cake"+(i+1)+"_cart").style.display=="none")
           cake_cart_none++;
        for(var i=0;i<gateaux_name.length;i++)
        if(document.getElementById("gateau"+(i+1)+"_cart").style.display=="none")
        gateau_cart_none++;
        for(var i=0;i<viennoiseries_name.length;i++)
        if (document.getElementById("vin"+(i+1)+"_cart").style.display=="none")
        vin_cart_none++;
        for(var i=0;i<tartes_name.length;i++)
        if(document.getElementById("tarte"+(i+1)+"_cart").style.display=="none")
        tarte_cart_none++;

        if(cake_cart_none==6 && gateau_cart_none==5 && vin_cart_none==3 && tarte_cart_none==3)
{   
    document.getElementById("finaliserbtn").style.display="none";
    document.querySelector(".title").innerHTML="vous n'avez aucun produit dans le panier";
}
}

// END PANIER
//* fonction de recherche : 

const chercher = () => {
    // la variable chercher prends la valeur de ce qu'on ecrit dans la recherche
    const chercher = document.getElementById("chercher").value.toUpperCase();
    //la liste prends en valeur yous les articles affichés
    const liste = document.querySelectorAll(".box")
    //les noms des produits
    const noms  = document.getElementsByTagName("h3")

    for (var i=0 ; i<noms.length ; i++){
        let match = liste[i].getElementsByTagName('h3')[0];

        if(match){
           let textvalue=match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(chercher) > -1){
             liste[i].style.display ="";
           }
           else{
            liste[i].style.display ="none";
           }
        }
    }
}

document.getElementById("chercher").addEventListener("input", chercher);


