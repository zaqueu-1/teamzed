mobileMenu = () => {
  const menuItems = document.querySelector("nav ul");

  if (menuItems.classList.contains("open")) {
    menuItems.classList.remove("open");
    document.querySelector("#hide-me").classList.toggle("hide");
    document.querySelector("#close-btn").classList.toggle("hide");
  } else {
    menuItems.classList.add("open");
    document.querySelector("#hide-me").classList.toggle("hide");
    document.querySelector("#close-btn").classList.toggle("hide");
  }
}

goToForms = () => {
  const formsButton = document.querySelector(".forms-button");

  if (formsButton) {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLSfMLbPIRei9ry6l0EXnhObgoIaritElD8eHqFbcQvfuU9Of1Q/viewform";
    target = "_blank";
  }
}

var width500 = window.matchMedia("(max-width: 500px)");
var width900 = window.matchMedia("(max-width: 900px)");

smoothScrolling = () => {
  const hiddenElements = document.querySelectorAll(".hidden"); 
  
  if (width500.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
    } else {
        entry.target.classList.remove("show");
      }
    });
  }, {rootMargin: "700px"})

  hiddenElements.forEach((e) => observer.observe(e));
  ;}

  if (width900.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
      } else {
          entry.target.classList.remove("show");
        }
      });
    }, {rootMargin: "550px"})

    hiddenElements.forEach((e) => observer.observe(e));
    ;}

    else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
          }
        });
      }, {rootMargin: "50px"})

      hiddenElements.forEach((e) => observer.observe(e));
      ;}
}

smoothScrolling();
Modal.initElements();

