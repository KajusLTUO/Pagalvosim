const technologies = {
  js: {
    title: "JavaScript",
    description: "Used for interactive website functionality.",
    icon: "JS"
  },
  html: {
    title: "HTML",
    description: "Used for creating the structure of the website.",
    icon: "HTML"
  },
  css: {
    title: "CSS",
    description: "Used for styling and responsive page layout.",
    icon: "CSS"
  },
  react: {
    title: "React",
    description: "A JavaScript library often used for building UI components.",
    icon: "R"
  },
  node: {
    title: "Node.js",
    description: "Used for backend JavaScript development.",
    icon: "N"
  },
  figma: {
    title: "Figma",
    description: "Used for designing the website layout before coding.",
    icon: "F"
  },
  git: {
    title: "Git",
    description: "Used for version control and teamwork.",
    icon: "Git"
  },
  emailjs: {
    title: "EmailJS",
    description: "Used to send contact form messages without a backend.",
    icon: "@"
  }
};

const techDots = document.querySelectorAll(".tech-dot");
const techTitle = document.querySelector("#techTitle");
const techDescription = document.querySelector("#techDescription");
const techIcon = document.querySelector("#techIcon");

techDots.forEach(dot => {
  dot.addEventListener("click", () => {
    techDots.forEach(item => item.classList.remove("active"));
    
    const selectedTech = dot.dataset.tech;
    const tech = technologies[selectedTech];
    // kokia yra dot'o "tech" reiksme ieskom dicte ir suteikiam jam description
    techTitle.textContent = tech.title;
    techDescription.textContent = tech.description;
    techIcon.textContent = tech.icon;
  });
});