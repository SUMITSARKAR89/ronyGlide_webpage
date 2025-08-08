// 1 =====================dark mood=============
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

sun.addEventListener("click", () => {
  document.body.classList.add("lightMood");
});
moon.addEventListener("click", () => {
  document.body.classList.remove("lightMood");
});

//2. ==================menu=================
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


//3. ==================cursor===========
const cursor = document.querySelector(".cursor");
const heroCard = document.querySelector(".hero-card");

heroCard.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

const footerLast = document.querySelector(".footer-last");
const fCursor = document.querySelector(".f-cursor");

footerLast.addEventListener("mousemove", (e) => {
  fCursor.style.top = `${e.clientY}px`;
  fCursor.style.left = `${e.clientX}px`;
});

//4. ==================date ==================
const dayName = document.querySelector("#dayName");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date().getDay();
dayName.textContent = days[today];

// ================================slider================
const nextBtnNine = document.querySelector(".nine-next");
const prevBtnNine = document.querySelector(".nine-prev");
const sliderNine = document.querySelector(".nine-slider");

nextBtnNine.addEventListener("click", () => {
  let nineSlides = document.querySelectorAll(".nine-slide");
  sliderNine.appendChild(nineSlides[0]);
});

prevBtnNine.addEventListener("click", () => {
  let nineSlides = document.querySelectorAll(".nine-slide");
  sliderNine.prepend(nineSlides[nineSlides.length - 1]);
});

//5. ==================== section panel and navigation btns ======================
const mainLink = document.querySelectorAll('.main-link');
const sectionPanel = document.querySelectorAll('.sectionPanel');

mainLink.forEach( (links, index) => {
  links.addEventListener("click", () => {
    mainLink.forEach (links => {
      links.classList.remove('active');
    });
    links.classList.remove('active');

    sectionPanel.forEach(content => {
      content.classList.remove('active');
    });
    sectionPanel[index].classList.add('active');
  });
});

// =========================================== 
 const mainLink2 = document.querySelectorAll(".main-link2");
      const sectionPanel2 = document.querySelectorAll(".sectionPanel");

      mainLink2.forEach((link, index) => {
        link.addEventListener("click", () => {
          // Remove 'active' from all links
          mainLink2.forEach((link) => link.classList.remove("active"));

          // Add 'active' to the clicked link
          link.classList.add("active");

          // Remove 'active' from all sections
          sectionPanel2.forEach((panel) => panel.classList.remove("active"));

          // Add 'active' to the corresponding section
          sectionPanel2[index].classList.add("active");
        });
      });

      window.addEventListener("click", (e) => {
        if (e.target.classList.contains("sectionPanel")) {
          e.target.style.display = "none";
        }
      });

// 6. ======================load button=========
const loadBtn = document.querySelector(".write-more-btn");
const wContainer = document.querySelector(".write-container2");

loadBtn.addEventListener("click", () => {
  wContainer.style.display = "flex";
  wContainer.style.opacity = "1";
  wContainer.style.margin = "5% 0";
  loadBtn.style.display = "none";
});

//7. =======================modal writting ===========================

const writeCard = document.querySelectorAll(".write-card");
const wcClosed = document.querySelectorAll(".wc-colse");

writeCard.forEach((wCard) => {
  wCard.addEventListener("click", () => {
    const modalId = wCard.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

wcClosed.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".wc-modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("wc-modal")) {
    e.target.style.display = "none";
  }
});

// 8. ===============slider=================
const slideImage = document.querySelectorAll(".framer-img");
      const dot = document.querySelectorAll(".dot");
      const slider = document.querySelector(".slider-container-three");

      let counter = 0;
      let length = slideImage.length;
      let defaultInterval;

      function autoRun() {
        defaultInterval = setInterval(() => {
          nextSlider();
        }, 5000);
      }
      autoRun();
      
      slider.addEventListener("mouseover", () => {
        clearInterval(defaultInterval);
      });

      // 3. Resume when mouse leaves
      slider.addEventListener("mouseout", autoRun);

      // 4. Move to next slide (used by auto-run)
      function nextSlider() {
        slideImage[counter].style.animation = "next1 1.5s ease-in-out forwards";
        counter = counter >= length - 1 ? 0 : counter + 1;
        slideImage[counter].style.animation = "next2 1.5s ease-in-out forwards";
        dotIndecator();
      }

      // 5. Dot indicator update
      function dotIndecator() {
        dot.forEach((d) => d.classList.remove("active"));
        dot[counter].classList.add("active");
      }

      // 6. Clickable dot navigation
      function changeImage(dotElement) {
        let imageId = parseInt(dotElement.getAttribute("attr"));

        if (imageId === counter) return;

        slideImage[counter].style.animation =
          imageId > counter
            ? "next1 1.5s ease-in-out forwards"
            : "prev1 1.5s ease-in-out forwards";
        counter = imageId;
        slideImage[counter].style.animation =
          imageId > counter
            ? "next2 1.5s ease-in-out forwards"
            : "prev2 1.5s ease-in-out forwards";

        dotIndecator();
      }

      // Expose for inline onclick
      window.changeImage = changeImage;
