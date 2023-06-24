function myFunction(x) {
    x.classList.toggle("change");
  }


  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-nav-toggle");
  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });