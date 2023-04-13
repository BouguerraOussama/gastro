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
    
}
let button_next=document.querySelector('.swiper-button-next');

setInterval(() => {
    button_next.click();
  }, 3000);


// CATEGORIES
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".option-container");
const optionsList = document.querySelectorAll(".option");

const box_container=document.querySelector(".box-container");

function product_list(table_name,table_price,table_img)
  {
    for(var j=0;j<table_name.length;j++)
    {
let div_box=document.createElement("div");
div_box.classList.add("box");

// div with class image
let div_img=document.createElement("div");
div_img.classList.add("image");
let img = document.createElement("img");
img.src = "../images/"+table_img[j]+".jpg";
div_img.appendChild(img);
// end

// balise div avec class="content"
let div_content=document.createElement("div");
div_content.classList.add("content");
// end

// h3
let h3=document.createElement("h3");
h3.textContent=table_name[j];
// end

// balise div avec class="stars"
let div_stars=document.createElement("div");
div_stars.classList.add("stars");
for(var i=0;i<5;i++)
{
let star_i=document.createElement("i");
star_i.classList.add("fas","fa-star");
div_stars.appendChild(star_i);
}
// end


//balise span avec class="price"
let span_price=document.createElement("span");
span_price.classList.add("price");
span_price.textContent=table_price[j]+" DT";
// end

// form
let form=document.createElement("form");
let input=document.createElement("input");
input.type="number";
input.value=0;
form.appendChild(input);
// end

// balise a avec class="btn"
let a=document.createElement("a");
a.classList.add("btn");
a.textContent="ajouter au panier";
// end a

div_box.appendChild(div_img);
div_content.appendChild(h3);
div_content.appendChild(div_stars);
div_content.appendChild(span_price);
div_content.appendChild(form);
div_content.appendChild(a);
div_box.appendChild(div_content);
box_container.appendChild(div_box);
}
  }
  // cakes
const cakes_name=["aaaa","zzzz","wwww"];
const cakes_price= [30,40,50];
const cakes_img=["product-1","product-2","product-3"];

// gateaux
const gateaux_name=["aslema","ena","win"];
const gateaux_price=[70,80,90];
const gateaux_img=["product-1","product-2","product-3"];

// viennoiseries
const viennoiseries_name=["ahla","labes","cv"];
const viennoiseries_price=[100,200,300];
const viennoiseries_img=["product-1","product-2","product-3"];

//tartes
const tartes_name=["aaaa","zzzz","wwww"];
const tartes_price= [30,40,50];
const tartes_img=["product-1","product-2","product-3"];

product_list(cakes_name,cakes_price,cakes_img);
selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").textContent;
    optionsContainer.classList.remove("active");

while (box_container.lastElementChild) {
    box_container.removeChild(box_container.lastElementChild);
}
if (selected.textContent=="cakes")
{  
    product_list(cakes_name,cakes_price,cakes_img);
}
else if (selected.textContent=="gateaux")
{
    product_list(gateaux_name,gateaux_price,gateaux_img);
}
else if(selected.textContent=="viennoiseries")
{
    product_list(viennoiseries_name,viennoiseries_price,viennoiseries_img);
}
else if(selected.textContent=="tartes")
{
    product_list(tartes_name,tartes_price,tartes_img);
}
else
{
    product_list(pain_name,pain_price,pain_img);
}
  });
});

// END CATEGORIES

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

