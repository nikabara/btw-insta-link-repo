const sendBtn = document.querySelector(".send_btn");

const sendEmail = () => {
    Email.send
    ({
        Host : "smtp.elasticemail.com",
        Username : "nikobar3005@gmail.com",
        Password : "3E95B6DB198797D0216F5740888979ACFA7F",
        To : 'nikobar3005@gmail.com',
        From : "nikobar3005@gmail.com",
        Subject : "BTW",
        Body : "Ahahahahahahahhaha ppl are fucked ahahahahahah"
    })
    .then(message => alert(message)
    );
}

window.onload = () => {
    sendBtn.onclick = () => {
        sendEmail();
    }
}