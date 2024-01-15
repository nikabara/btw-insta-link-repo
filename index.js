import { sendEmail } from "./send-email-API.js";

const sendBtn = document.querySelector(".send_btn");

let emailMessage = document.getElementById("email-box-input-id");
let mainContent = document.getElementById("main-content");
let userTag = document.getElementById("user-tag");
let errMsg = document.getElementById("error-msg");
let infoLayover = document.getElementById("user-info-layover");

let userInfoSubmit = document.querySelector(".user-info-submit-btn");

window.onload = () => {
    mainContent.style.display = "none";

    sendBtn.onclick = () => {
        if (emailMessage.value.length > 0) {
            sendEmail(`${userTag.value}`, `${emailMessage.value}`);
            emailMessage.value = "";
        }
        else{
            alert("Can not send empty letter");
        }
    }

    userInfoSubmit.onclick = () => {
        if (userTag.value[0] === "@" && userTag.value.length > 3) {
            errMsg.style.color = "green";
            errMsg.innerText = "Verification successful";
            infoLayover.style.backdropFilter = "none"
            setInterval(() => {
                infoLayover.style.display = "none";
                mainContent.style.display = "block";
            }, 3000);
        }
        else{
            errMsg.innerText = "Tag length must be more than 4 and should contain '@' sign";
            userTag.value = "";
        }
    }
}