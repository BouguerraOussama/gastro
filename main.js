let menu=document.querySelector("#menu-bar");
let navbar= document.querySelector(".navbar");
menu.onclick = () =>{
  menu.classList.toggle('fa-x');
  navbar.classList.toggle("active");
}
window.onscroll = () =>{
  menu.classList.remove('fa-x');
  navbar.classList.remove("active");
}