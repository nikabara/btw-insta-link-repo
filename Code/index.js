import { sendEmail } from "../API/send-email-API.js";

const sendBtn = document.querySelector(".send_btn");

let emailMessage = document.getElementById("email-box-input-id");
window.onload = () => {

    sendBtn.onclick = () => {
        sendEmail("@instagram", `${emailMessage.value}`);
    }
}
