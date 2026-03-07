import React from 'react';


// {
//     "id": "TKT-1001",
//     "title": "Payment gateway timeout",
//     "description": "Customer reported 404 error during checkout on mobile devices.",
//     "customer": "Arif Ahmed",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2026-03-01T08:30:00Z"
// }
const MainCard = ({tiket, handleTicket}) => {
    console.log(tiket.title)
    return (
        <div  key={tiket.id}
          onClick={() => handleTicket(tiket)}>
            <div className='flex justify-between mb-3'>
                <h3 className='text-xl font-bold'>{tiket.title}</h3>
                <span className='bg-[#B9F8CF] p-3 rounded-xl'><i class="fas fa-dot-circle"></i>{tiket.status}</span>
            </div>
            <p className='mb-3'>{tiket.description}</p>
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <span>#1001</span>
                    <span>{tiket.priority} PRIORITY</span>
                </div>
                <div className='flex gap-6'>
                    <span>{tiket.customer}</span>
                    <span>{new Date(tiket.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default MainCard;