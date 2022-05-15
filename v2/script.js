function assignListeners() {
  const hamburger = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--expand");
  });
}

document.addEventListener("DOMContentLoaded", assignListeners);
