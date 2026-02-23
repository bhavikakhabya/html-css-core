const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});



const joinBtn = document.getElementById("joinBtn");
joinBtn.addEventListener("click", () => {
  alert("Thanks for joining WaveRiders! 🌊 We will contact you soon.");
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
});
