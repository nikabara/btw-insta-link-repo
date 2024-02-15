export const sendEmail = (header, message) => {
    Email.send
    ({
        Host : "smtp.elasticemail.com",
        Username : "example@gmail.com",
        Password : "5640ASD5A6S4D0A65ASD40S5",
        To : "TOEXAMPLE@gmail.com",
        From : "example@gmail.com",
        Subject : header,
        Body : message
    })
    .then(message => alert(message)
    );
}

