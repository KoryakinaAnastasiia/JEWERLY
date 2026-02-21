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

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    buttons.forEach((b) => b.classList.remove("active"));
    // Добавляем класс только нажатой
    this.classList.add("active");
  });
});

//street

const buttons_street = document.querySelectorAll(".address_point button");

buttons_street.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Находим внутри нажатой кнопки элемент с классом .street
    const streetLabel = btn.querySelector(".street");

    // Переключаем класс именно у этой надписи
    streetLabel.classList.toggle("show");
  });
});

//scroll

const container = document.querySelector(".scroll_imgs");
const btnNext = document.querySelector(".scroll_footer-arrow-right");
const btnPrev = document.querySelector(".scroll_footer-arrow-left");

// Прокрутка вправо
btnNext.addEventListener("click", () => {
  container.scrollBy({
    left: 300, // Расстояние прокрутки в пикселях
    behavior: "smooth", // Плавная анимация
  });
});

// Прокрутка влево
btnPrev.addEventListener("click", () => {
  container.scrollBy({
    left: -300, // Отрицательное значение для прокрутки назад
    behavior: "smooth",
  });
});
