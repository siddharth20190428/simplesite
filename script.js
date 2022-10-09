let nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 50) {
    nav.classList.add("down");
  } else {
    nav.classList.remove("down");
  }
});
