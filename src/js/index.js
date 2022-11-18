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

smoothScrolling = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
    } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden"); 
  hiddenElements.forEach((e) => observer.observe(e));
}

smoothScrolling();
Modal.initElements();