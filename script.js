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
    aboutSection.style.scrollMarginTop = "80px";
}
let skillsBtnSmall = document.getElementById("skillsBtnSmall");
let skillsSection = document.getElementById("skillsSection");

skillsBtnSmall.onclick = () => {
    menuItems.classList.toggle("d-none");
    crossIcon.classList.add("d-none");
    hambergerIcon.classList.remove("d-none");
    skillsSection.style.scrollMarginTop = "80px";
}