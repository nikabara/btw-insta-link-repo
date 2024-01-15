import { sendEmail } from "../API/send-email-API.js";

const sendBtn = document.querySelector(".send_btn");

window.onload = () => {
    sendBtn.onclick = () => {
        sendEmail("nikobar3005@gmail.com", "nikobar3005@gmail.com", "@instagram", "I got all the info");
    }
}
