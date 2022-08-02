import "dotenv/config";
import axios from "axios";

import { handleErrorResponse } from "../errors.js";
import { processEmail } from "../gmail-helper.js";
import { FROM_NAME, TO_EMAIL, TO_NAME } from "../config.js";

/**
 * Sends an Email and Logs activity in Gorgias on ticket
 * @param {string} ticketId - Id of the ticket we are responding to
 * @param {string} fromEmail - Email being used to send the body from
 * @param {string} emailBody - Body of the message to send to customer
 * @param {string} base64Token - Username:api_key encoded in base64
 */

export async function sendEmailAndLog(
  ticketId,
  fromEmail,
  emailBody,
  base64Token
) {
  let instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000,
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${base64Token}`,
    },
  });

  // get ticket data and pass to other functions
  instance
    .get(`/api/tickets/${ticketId}`)
    .then((res) => res.data)
    .then((data) => {
      let { subject, customer, messages } = data;
      // Send email to customer with email thread from ticket
      processEmail(fromEmail, customer.email, subject, emailBody, messages);
    })
    .catch((err) => handleErrorResponse(err));

  // Log email on ticket
  instance
    .post(`/api/tickets/${ticketId}/messages`, {
      source: {
        to: [{ name: TO_NAME, address: TO_EMAIL }],
        from: { name: FROM_NAME, address: `${fromEmail}` },
        type: "email",
      },
      via: "email",
      from_agent: true,
      channel: "email",
      body_text: `${emailBody}`,
    })
    .then((res) => console.log("Ticket Activity Logged!"))
    .catch((err) => handleErrorResponse(err));
}
