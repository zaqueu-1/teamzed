
dropdown = () => {
  document.getElementById("mydrop").classList.toggle("show");
}

goToStore = () => {
  const membersButton = document.querySelector("#members");

  if (membersButton) {
    window.location = "src/pages/store.html";
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

