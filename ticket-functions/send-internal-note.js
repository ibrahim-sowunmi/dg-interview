import "dotenv/config";
import axios from "axios";
import { handleErrorResponse } from "../errors.js";
import { FROM_EMAIL, FROM_NAME, USER_ID } from "../config.js";

/**
 * Send an internal note on a ticket.
 * @param {string} ticketId - Id of the ticket we are attaching our message
 * @param {string} userEmail - Email being used to send the body from
 * @param {string} emailBody - Body of the message to send the note
 * @param {string} base64Token - Username:api_key encoded in base64
 */
export async function sendInternalNoteOnTicket(
  ticketID,
  userEmail,
  noteBody,
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

  instance
    .post(`/api/tickets/${ticketID}/messages`, {    
      sender: { id: USER_ID, email: `${userEmail}` },
      source: {
        from: { name: FROM_NAME, address: FROM_EMAIL },
      },
      channel: "internal-note",
      from_agent: true,
      via: "internal-note",
      body_text: `${noteBody}`,
    })
    .then((res) => console.log("Internal Note Created Succesfully"))
    .catch((err) => handleErrorResponse(err));
}
