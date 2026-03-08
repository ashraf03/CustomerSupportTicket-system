import React from 'react';

const TaskStatus = ({tiket}) => {
    console.log(tiket)
    return (
        <div className='w-[338px]'>
            <h3 className=''>Task Status</h3>
            
                {
                    tiket.map(task => (
                        <div>
                            <h1>{task.title}</h1>
                            <button className="bg-[#02A53B] p-3 w-full">Complete</button>
                        </div>
                    ))
                }
            
        </div>
    );
};

export default TaskStatus;