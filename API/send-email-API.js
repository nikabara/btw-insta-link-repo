export const sendEmail = (email_to, email_from, header, message) => {
    Email.send
    ({
        Host : "smtp.elasticemail.com",
        Username : email,
        Password : "3E95B6DB198797D0216F5740888979ACFA7F",
        To : email_to,
        From : email_from,
        Subject : header,
        Body : message
    })
    .then(message => alert(message)
    );
}

