import React from 'react';

const MainSection = () => {
    return (
        <div className='w-[1200px] mx-auto flex mt-10'>
            <div className=''>
                <h3 className='mb-6 text-2xl font-bold'>Customer Tickets</h3>
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <div className='flex justify-between mb-3'>
                            <h3 className='text-xl font-bold'>Login Issues - Can't Access Account</h3>
                            <span className='bg-[#B9F8CF] p-3 rounded-xl'><i class="fas fa-dot-circle"></i> Open</span>
                        </div>
                        <p className='mb-3'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className='flex justify-between'>
                            <div className='flex gap-6'>
                                <span>#1001</span>
                                <span>HIGH PRIORITY</span>
                            </div>
                            <div>
                                <span>John Smith</span>
                                <span>1/15/2024</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-3'>
                            <h3>Login Issues - Can't Access Account</h3>
                            <span>Open</span>
                        </div>
                        <p className='mb-3'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className='flex justify-between'>
                            <div>
                                <span>#1001</span>
                                <span>HIGH PRIORITY</span>
                            </div>
                            <div>
                                <span>John Smith</span>
                                <span>1/15/2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[338px]'>
                <h3 className=''>Task Status</h3>
            </div>
        </div>
    );
};

export default MainSection;