import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskStatus = ({ tiket, resolved, decCount }) => {

  return (
    <div>

      <ToastContainer />

      {/* In Progress */}
      <div className='w-[350px] p-5'>
        <h3 className='text-2xl font-bold'>Task Status</h3>

        {tiket.map(task => (
          <div key={task.id} className="mt-5">

            <h1 className='font-medium'>
              {task.title}
            </h1>

            <button
              onClick={() => {
                decCount(task);
                toast.success("Task Completed");
              }}
              className="bg-[#02A53B] text-white p-3 w-full mt-4"
            >
              Complete
            </button>

          </div>
        ))}
      </div>

      {/* Resolved */}
      <div className='w-[350px] p-5'>
        <h3 className='text-2xl font-bold'>Resolved Task</h3>

        {resolved.length === 0 ? (
          <h1 className='mt-5 font-medium text-[#627382] p-5'>
            No resolved tasks yet.
          </h1>
        ) : (
          resolved.map(task => (
            <div key={task.id} className="mt-5">
              <h1 className='font-medium text-green-600'>
                {task.title}
              </h1>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default TaskStatus;