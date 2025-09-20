let hambergerIcon = document.getElementById("hambergerIcon");
let crossIcon = document.getElementById("crossIcon");
let menuItems = document.getElementById("menuItems");

hambergerIcon.addEventListener('click',function(){
    menuItems.classList.remove("d-none");
    crossIcon.classList.remove("d-none");
    hambergerIcon.classList.add("d-none");
})
crossIcon.addEventListener('click',function(){
    menuItems.classList.add("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
});

let homeBtnSmall = document.getElementById("homeBtnSmall");

homeBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
}
let aboutBtnSmall = document.getElementById("aboutBtnSmall");
let aboutSection = document.getElementById("aboutSection")

aboutBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
    
}
let skillsBtnSmall = document.getElementById("skillsBtnSmall");
let skillsSection = document.getElementById("skillsSection");

skillsBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
    
}

let projSection = document.getElementById("projSection");
let projectsBtnSmall = document.getElementById("projectsBtnSmall");

projectsBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
}

let eduSection = document.getElementById("eduSection");
let eduBtnSmall = document.getElementById("eduBtnSmall");

eduBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
}

let certifiSection = document.getElementById("certifiSection");
let certifiBtnSmall = document.getElementById("certifiBtnSmall");

certifiBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
}

let contactSection = document.getElementById("contactSection");
let contBtnSmall = document.getElementById("contBtnSmall");

contBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
}

//Navbar
let lastScroll = 0;
let navBar = document.getElementById("navBar");

window.addEventListener('scroll',() => {
    let currentScroll = window.scrollY;

    if(currentScroll > lastScroll){
        navBar.style.top = "-80px";
        menuItems.style.top = "-50%";
    }else{
        navBar.style.top = "0px";
        menuItems.style.top = "70px";
    }

    lastScroll = currentScroll;
})