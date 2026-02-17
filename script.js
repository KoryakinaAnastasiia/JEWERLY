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

const buttons = document.querySelectorAll(".header__footer_lang_button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    buttons.forEach((b) => b.classList.remove("active"));
    // Добавляем класс только нажатой
    this.classList.add("active");
  });
});
