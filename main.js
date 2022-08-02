import { sendEmailReplyOnTicket } from "./ticket-send-email.js";
import { sendInternalNoteOnTicket } from "./ticket-send-internal-note.js";

const ticketID = "2017233";
const token = process.env.API_TOKEN;
const fromEmail = process.env.TEST_EMAIL;
const emailBody =
  "Hello,\n\n        I can't place an order on your site, it says: I don't have enough credit.\n        How can I add some credits?\n\n        Cheers,\n        John Doe\n        ";


sendEmailReplyOnTicket(ticketID, fromEmail, emailBody, token);

sendInternalNoteOnTicket(ticketID, fromEmail, emailBody, token);
