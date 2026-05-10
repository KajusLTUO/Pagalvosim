const timelineData = {
  2013: [
    "IT Support Group was founded",
    "We started building our first client projects",
    "Our team began growing"
  ],
  2015: [
    "We expanded our services",
    "We worked with more business clients",
    "Our team improved internal processes"
  ],
  2018: [
    "We hire our 10th developers",
    "Our active client count officially reaches 20",
    "We initiate our first blockchain project",
    "We are recognized as a top engineering company"
  ],
  2020: [
    "We moved more services online",
    "We supported remote work solutions",
    "We improved our customer support systems"
  ],
  2022: [
    "We completed more international projects",
    "We improved cybersecurity support",
    "We continued growing our client base"
  ]
};

const buttons = document.querySelectorAll("#years button"); //buttonu listas
const yearText = document.querySelector("#yearText"); //aprasymas po tais buttonais

buttons.forEach(button => { // praeinam pro visus buttonus
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active")); // Visiems pasalinam "active" klase
    button.classList.add("active"); // pridedam paspautsam mygtukui "active" klase

    const year = button.dataset.year;
    
    yearText.style.opacity = 0;
    
    setTimeout(() => { // trumpa animacija kai keiciasi buttonas
    yearText.innerHTML = "";

    timelineData[year].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        yearText.appendChild(li);
    });

    yearText.style.opacity = 1;
    }, 200);
  });
});