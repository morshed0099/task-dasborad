import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Messages = () => {
    return (
        <div className=' bg-white'>
            <div className='flex'>
                <div className='border border-gray-300  p-4'>
                    <img className='w-14 h-14 rounded-full' src="https://th.bing.com/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
                </div>
                <div className='flex-1 border border-gray-300 justify-center flex items-center'>
                    <h2>Mr.Golam Morhsed</h2>
                </div>
            </div>
            <div className='h-[100px] flex justify-start'>
                <div className='p-2 relative bg-slate-100 rounded-2xl w-96 m-3'>
                    <p className='text-1xl font-semibold'> hello...</p>
                    <p className='absolute right-[20px] top-[17px] text-gray-400'>12.30</p>
                </div>
            </div>
            <div className='h-[80px] flex justify-end'>
                <div className='p-2 relative bg-indigo-300 rounded-2xl w-96 m-3'>
                    <p className='text-1xl font-semibold'> hello...</p>
                    <p className='absolute right-[20px] top-[17px] text-gray-500'>12.31</p>
                </div>
            </div>
            <div className='border relative flex justify-between border-gray-300 h-[80px]'>
                <div className='flex-grow'>
                    <input type="text" placeholder='type your message' className='w-full h-full pl-6 pr-24' />
                </div>
                <div>
                    <button>
                        <AiOutlineSend className='absolute right-[7px] top-[24px] text-4xl text-blue-800' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Messages;