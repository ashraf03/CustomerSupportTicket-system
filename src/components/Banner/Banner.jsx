import React from 'react';

const Banner = () => {
    return (
        <div className='flex gap-10 w-[1200px] mx-auto'>
            <div className='flex flex-col items-center justify-center  w-[780px] h-[250px] rounded-lg bg-gradient-to-r from-[#632EE3] to-[#54CF68] text-[#fff]'>
                <h1 className='text-2xl font-bold'>In-Progress</h1>
                <span className='text-3xl'>0</span>
            </div>
            <div className='flex flex-col items-center justify-center w-[780px] h-[250px] rounded-lg bg-gradient-to-r from-[#632EE3] to-[#54CF68] text-[#fff]'>
                <h1 className='text-2xl font-bold'>Resolved</h1>
                <span className='text-3xl'>0</span>
            </div>
        </div>
    );
};

export default Banner;