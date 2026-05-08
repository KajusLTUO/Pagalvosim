"use strict";

const templateID = "template_m4uvu4z";
const serviceID = "service_ift0hwl";

emailjs.init({
  publicKey: "Jb43xav-MoKp5X-5Q",
});

const data = {};

function sendEmail() {
  emailjs.send(serviceID, templateID, data).then(
    (response) =>
      console.log(
        "El. laiškas buvo sekmingai išsiustas",
        response.status,
        response.text,
      ),
    (error) => {
      console.log("KLAIDA!!!!!", error);
      alert("KLAIDA");
    },
  );
}