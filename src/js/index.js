
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

smoothScrolling = () => {
  const hiddenElements = document.querySelectorAll(".hidden"); 

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
}

smoothScrolling();
Modal.initElements();

