const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

sun.addEventListener("click", () => {
    document.body.classList.add("lightMood");
});
moon.addEventListener("click", () => {
    document.body.classList.remove("lightMood");
});


// ==================menu================= 
const openMenu = document.querySelector("#menu"); 
const closeMenu = document.querySelector(".closeMenu"); 
const navigation = document.querySelector("#navigation"); 

openMenu.addEventListener("click", () => {
    closeMenu.style.display = "block";
    openMenu.style.opacity = "0.2";
    navigation.style.right = "10px";
});
closeMenu.addEventListener("click", () => {
   openMenu.style.opacity = "1";
    closeMenu.style.display = "none";
     navigation.style.right = "-100%";
});