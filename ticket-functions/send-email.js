import 'dotenv/config'
import axios from 'axios';
import { handleErrorResponse } from '../errors.js';

/**
 * Send an email reply on a ticket.
 * @param {string} ticketId - Id of the ticket we are attaching our message
 * @param {string} fromEmail - Email being used to send the body from 
 * @param {string} emailBody - Body of the message to send the email
 * @param {string} base64Token - Username:api_key encoded in base64
 */
export async function sendEmailReplyOnTicket(ticketId, fromEmail, emailBody, base64Token) {
  let instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000,
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${base64Token}`,
    },
  });

  instance
    .post(`/api/tickets/${ticketId}/messages`, {
      source: {
        to: [{ name: "Marie Curie", address: "i.sowunmi97+mc@gmail.com" }],
        from: { name: "Marie Curie", address: `${fromEmail}`},
        type: "email",
      },
      via: "email",
      from_agent: true,
      channel: "email",
      body_text: `${emailBody}`,
    })
    .then((res) => console.log(res))
    .catch((err) => handleErrorResponse(err));
}

