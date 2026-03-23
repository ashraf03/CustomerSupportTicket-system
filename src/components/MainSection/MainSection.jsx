import React from 'react';
import MainCard from './MainCard/MainCard';
import TaskStatus from './TaskStatus/TaskStatus';

const MainSection = ({tiketsData, handleTicket, tiket, resolved, decCount}) => {

  return (
    <div className='w-[1200px] mx-auto flex mt-10 gap-10'>

      <div>
        <h3 className='mb-6 text-2xl font-bold'>Customer Tickets</h3>

        <div className='grid grid-cols-2 gap-10'>

          {tiketsData.map(ticket => (
            <MainCard
              key={ticket.id}
              tiket={ticket}
              handleTicket={handleTicket}
            />
          ))}

        </div>

      </div>

      <TaskStatus
        tiket={tiket}
        resolved={resolved}
        decCount={decCount}
      />

    </div>
  );
};

export default MainSection;