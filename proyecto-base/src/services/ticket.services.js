import { respTicketDto } from "../dto/ticket.dto.js";
import ticketRepository from "../persistence/mongoDB/ticket.repository.js";

const createTicket = async (userEmail, totalCart) => {
    const newTicket = {
        amount: totalCart,
        purchaser: userEmail,
        code: Math.random().toString(36).substr(2, 9),
    };
    
    const ticket = await ticketRepository.create(newTicket);
    const ticketResponse = respTicketDto(ticket);
    return ticketResponse;
};

export default { createTicket };