"use strict";

const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const userEmail = document.querySelector("#userEmail");
const userPhone = document.querySelector("#userPhone");
const projectDescription = document.querySelector("#projectDescription");
const file = document.querySelector("#file")

// formos siuntimas/validacija
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fullName.value.trim() === "") {
    // trim pasalina tarpus gale ir pradzioj
    alert("Enter your Full Name");
    return;
  }

  if (/\d/.test(fullName.value)) {
    // "/\d/" tikrina ar yra ivestas skaicius
    alert("Your Full Name can't consist of numbers");
    return;
  }

  if (projectDescription.value.trim() === "") {
    alert("Please describe your project");
    return;
  }

  if (userPhone.value === "") {
    alert("Please enter your phone number");
    return;
  }

  data.fullName = fullName.value.trim();
  data.email = userEmail.value.trim();
  data.phoneNumber = userPhone.value.trim();
  data.description = projectDescription.value.trim();
  data.file = file.value;
  sendEmail()
});