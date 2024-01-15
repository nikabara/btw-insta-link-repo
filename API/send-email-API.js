export const sendEmail = (header, message) => {
    Email.send
    ({
        Host : "smtp.elasticemail.com",
        Username : "nikobar3005@gmail.com",
        Password : "3E95B6DB198797D0216F5740888979ACFA7F",
        To : "bythewayapp07@gmail.com",
        From : "nikobar3005@gmail.com",
        Subject : header,
        Body : message
    })
    .then(message => alert(message)
    );
}

