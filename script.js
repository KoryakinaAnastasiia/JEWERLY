const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const btnclose = document.getElementById("menuBtnClose");

btn.addEventListener("click", () => {
  // Переключаем класс 'active' у меню
  menu.classList.toggle("active");
});

// Закрытие меню при клике вне его области
btnclose.addEventListener("click", () => {
  menu.classList.remove("active");
});

//language

const buttons = document.querySelectorAll(".header__footer_lang_button");
//сделать для RU сразу эктив
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    buttons.forEach((b) => b.classList.remove("active"));
    // Добавляем класс только нажатой
    this.classList.add("active");
  });
});

//street

// const buttons_street = document.querySelectorAll(".address_point button");

// buttons_street.forEach((btn) => {
//   btn.addEventListener("mouseenter", () => {
//     const streetLabel = btn.querySelector(".street");
//     streetLabel.classList.toggle("show");
//   });

//   btn.addEventListener("mouseleave", () => {
//     const streetLabel = btn.querySelector(".street");
//     streetLabel.classList.remove("show");
//   });
// });

//scroll

const container = document.querySelector(".scroll_imgs");
const btnNext = document.querySelector(".scroll_footer-arrow-right");
const btnPrev = document.querySelector(".scroll_footer-arrow-left");
let currentIndex = 0;

const imgs = container.querySelectorAll("img");

// Прокрутка вправо
btnNext.addEventListener("click", () => {
  if (currentIndex >= 7) {
    return;
  }
  currentIndex = currentIndex + 1;
  imgs[currentIndex].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
});

// Прокрутка влево
btnPrev.addEventListener("click", () => {
  if (currentIndex <= 0) {
    return;
  }
  currentIndex = currentIndex - 1;
  imgs[currentIndex].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
});

//1)точки переключались на статус activ при прокрутке 2) при нажатии на кнопку появлялась та картинка индекса
//точки[currentIndex].classList.remowe"active"   data-index получить у батона
