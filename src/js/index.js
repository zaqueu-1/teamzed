
goToStore = () => {
  const membersButton = document.querySelector("#members");

  if (membersButton) {
    window.location = "src/pages/store.html";
    target = "_blank";
  }
}

AOS.init();
Modal.initElements();

