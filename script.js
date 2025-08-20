// Show logo when scrolling
window.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo");
  if (window.scrollY > 100) {
    logo.classList.add("show");
  } else {
    logo.classList.remove("show");
  }
});

// Example button click
document.getElementById("trailer-btn").addEventListener("click", () => {
  alert("Welcome Sreejith 🚀");
});
