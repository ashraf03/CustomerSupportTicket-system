import React from 'react';

const TaskStatus = ({tiket}) => {
    console.log(tiket)
    return (
        <div className='w-[350px] p-5'>
            <h3 className='text-2xl font-bold'>Task Status</h3>
            
                {
                    tiket.map(task => (
                        <div>
                            <h1 className='mt-5 font-medium'>{task.title}</h1>
                            <button className="bg-[#02A53B] p-3 w-full mt-4">Complete</button>
                        </div>
                    ))
                }
            
        </div>
    );
};

export default TaskStatus;