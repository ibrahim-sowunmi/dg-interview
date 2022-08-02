import nodemailer from "nodemailer";

function formatEmailThread(ticketMessages) {
  return ticketMessages.reduce((prev, curr) => {
    if (curr.body_text == null) return;
    if (curr.via != "email") return;
    if (curr.channel != "email") return;
    return `${curr.body_text} \n ==== \n ${prev}`;
  });
}

export function processEmail(fromEmail, toEmail, subject, text, messages) {
  const msg = {
    from: fromEmail,
    to: toEmail,
    subject: `RE: ${subject}`,
    text: `${text} ==== \n ${formatEmailThread(messages)}`,
  };

  nodemailer
    .createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_EMAIL_PASS,
      },
      port: 465,
      host: "smtp.gmail.com",
    })
    .sendMail(msg, (err) => {
      if (err) {
        return console.log("Error is: ", err);
      } else {
        return console.log("Email sent succesfully!");
      }
    });
}
