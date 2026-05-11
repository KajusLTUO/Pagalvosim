const cards = document.querySelectorAll("#work-card");

cards.forEach(card => {

    card.addEventListener("click", () => {
        cards.forEach(crd => crd.classList.remove("purple-card", "purple-upper"));
        if (card.classList.contains("upper-work")) {
            card.classList.add("purple-upper")
        }
        else{
          card.classList.add("purple-card")  
        }
    })
})