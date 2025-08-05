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


// ==================cursor=========== 
  const cursor = document.querySelector('.cursor');
  const heroCard = document.querySelector('.hero-card');

  heroCard.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });


  const footerLast = document.querySelector('.footer-last');
  const fCursor = document.querySelector('.f-cursor');

  footerLast.addEventListener('mousemove', (e) => {
    fCursor.style.top = `${e.clientY}px`;
    fCursor.style.left = `${e.clientX}px`;


  });



// ==================date ================== 
const dayName = document.querySelector("#dayName");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
dayName.textContent = days[today];


// ================================slider================ 
const nextBtnNine = document.querySelector('.nine-next');
const prevBtnNine = document.querySelector('.nine-prev');
const sliderNine = document.querySelector('.nine-slider');

nextBtnNine.addEventListener('click', () => {
    let nineSlides = document.querySelectorAll('.nine-slide');
    sliderNine.appendChild(nineSlides[0]);
  
});

prevBtnNine.addEventListener('click', () => {
    let nineSlides = document.querySelectorAll('.nine-slide');
    sliderNine.prepend(nineSlides[nineSlides.length - 1]);
    
});


// // ==================== section panel and navigation btns ====================== 
// const mainLink = document.querySelectorAll('.main-link');
// const sectionPanel = document.querySelectorAll('.sectionPanel');


// mainLink.forEach( (links, index) => {
//   links.addEventListener("click", () => {
//     mainLink.forEach (links => {
//       links.classList.remove('active');
//     });
//     links.classList.remove('active');

//     sectionPanel.forEach(content => {
//       content.classList.remove('active');
//     });
//     sectionPanel[index].classList.add('active');
//   });
// });

const loadBtn = document.querySelector('.write-more-btn');
const wContainer = document.querySelector('.write-container2');

loadBtn.addEventListener('click', () => {
  wContainer.style.display = "flex";
  wContainer.style.opacity = "1";
  wContainer.style.margin = "5% 0";
  loadBtn.style.display = "none";
  
});




