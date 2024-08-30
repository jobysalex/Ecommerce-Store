/* 
 "status": "success",
    "ticket": {
        "code": "sitxf9vzr",
        "purchase_datatime": "2024-08-16T00:02:26.604Z",
        "amount": "108.5",
        "purchaser": "usuario1@test.com",
        "_id": "66be97349e6b5b3adefd8faa",
        "__v": 0
    }

*/

export const respTicketDto = (ticket) => {
    return {
        code: ticket.code,
        date: ticket.purchase_datatime,
        totalAmount: ticket.amount,
        buyer: ticket.purchaser,
    };
};
