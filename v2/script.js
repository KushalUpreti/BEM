function assignListeners() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
  const backdrop = document.querySelector(".backdrop");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--expand");
    hamburgerWrapper.classList.toggle("hamburger-wrapper--expand");
    backdrop.classList.toggle("backdrop--visible");
  });

  backdrop.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--expand");
    hamburgerWrapper.classList.toggle("hamburger-wrapper--expand");
    this.classList.toggle("backdrop--visible");
  });
}

document.addEventListener("DOMContentLoaded", assignListeners);
