import React, { use } from 'react';
import MainCard from './MainCard/MainCard';
import TaskStatus from './TaskStatus/TaskStatus';

const MainSection = ({tiketsData, handleTicket, tiket}) => {
    const tikets = use(tiketsData);

    console.log(tikets);
    return (
        <div className='w-[1200px] mx-auto flex mt-10'>
            <div className=''>
                <h3 className='mb-6 text-2xl font-bold'>Customer Tickets</h3>
                <div className='grid grid-cols-2 gap-10'>
                    {
                        tikets.map(tiket => (
                            <MainCard tiket={tiket} handleTicket={handleTicket}></MainCard>
                        ))
                    }
                </div>
            </div>

            <TaskStatus  tiket ={tiket}></TaskStatus>
        </div>
    );
};

export default MainSection;