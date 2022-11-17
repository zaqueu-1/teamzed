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
hiddenElements.forEach((el) => observer.observe(el));

function menuAbrir() {
  let menuAbrir = document.querySelector("nav ul");

  if (menuAbrir.classList.contains("open")) {
    menuAbrir.classList.remove("open");
    document.querySelector("#hide-me").classList.toggle("hide");
    document.querySelector("#closebtn").classList.toggle("hide");
  } else {
    menuAbrir.classList.add("open");
    document.querySelector("#hide-me").classList.toggle("hide");
    document.querySelector("#closebtn").classList.toggle("hide");
  }
}

let btn2 = document.querySelectorAll(".btn2");

function btnaS() {
  if (btn2) {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLSfMLbPIRei9ry6l0EXnhObgoIaritElD8eHqFbcQvfuU9Of1Q/viewform";
    target = "_blank";
  }
}

Modal.initElements();