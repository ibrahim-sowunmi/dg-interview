import { EMAIL_BODY, TICKET_ID } from "./config.js";
import { sendEmailAndLog } from "./ticket-functions/send-email.js";
import { sendInternalNoteOnTicket } from "./ticket-functions/send-internal-note.js";

const ticketID = TICKET_ID;
const fromEmail = process.env.TEST_EMAIL;
const emailBody = EMAIL_BODY;
const token = process.env.API_TOKEN;

// Part 1

sendEmailAndLog(ticketID, fromEmail, emailBody, token);

// Part 2

sendInternalNoteOnTicket(ticketID, fromEmail, emailBody, token);

