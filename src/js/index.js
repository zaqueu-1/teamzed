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
  } else {
    menuAbrir.classList.add("open");
  }
}

let btn2 = document.querySelectorAll(".btn2");
let btn = document.querySelectorAll(".btn1");

function btnaS() {
  if (btn && btn2) {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLSfbKicBUzTP2w-_7ZF_IJuVp4Cz0cPY74rorSTN459-tdni3g/viewform";
    target = "_blank";
  }
}
