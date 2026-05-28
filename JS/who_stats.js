const statCards = document.querySelectorAll("#stat-card");

statCards.forEach(card => {
  card.addEventListener("click", () => {
    statCards.forEach(c => c.classList.remove("stat-active"));
    card.classList.add("stat-active");
  });
});
