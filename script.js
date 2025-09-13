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
})