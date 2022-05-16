function assignListeners() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const hamburgerWrapper = document.querySelector(".hamburger-wrapper");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--expand");
    hamburgerWrapper.classList.toggle("hamburger-wrapper--expand");
  });
}

document.addEventListener("DOMContentLoaded", assignListeners);
