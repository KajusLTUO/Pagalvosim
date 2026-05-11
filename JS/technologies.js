const techDots = document.querySelectorAll(".tech-dot");
const techInfo = document.querySelectorAll(".technology")

techDots.forEach(dot => {
  dot.addEventListener("click", () => {
    techDots.forEach(item => item.classList.remove("active"));
    dot.classList.add("active");
    let reiksme = (dot.dataset.id).split('-')[0]
    techInfo.forEach(info => {
      
      info.classList.remove("active")
      if (info.dataset.id == `${reiksme}-tech`) {
        info.classList.add("active")
      }
    });
  });
});