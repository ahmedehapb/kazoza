let navBar = document.querySelector(".nav-bar")
let openMenu = document.querySelector(".open-menu")


openMenu.onclick=function(){
    navBar.classList.toggle('active')
    openMenu.classList.toggle('fa-times')
};

window.onscroll=function(){
    navBar.classList.remove('active')
    openMenu.classList.remove('fa-times')
};